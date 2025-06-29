import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBullseye, faCalculator, faChartArea, faCheckCircle, faDraftingCompass, faEyeSlash, faHashtag, faRulerCombined, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumerosPipe } from '@core/utils/pipes/numeros.pipe';
import { LastResult, ResultRow } from '@core/models/result.interface';
import { LoadingComponent } from '@shared/components/ui/loading/loading.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatButtonModule, ReactiveFormsModule, FormsModule, NumerosPipe, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('pointsCanvas', { static: false }) pointsCanvas!: ElementRef<HTMLCanvasElement>;

  //ICONS
  faEyeSlash = faEyeSlash;
  faCalculator = faCalculator;
  faHashtag = faHashtag;
  faCheckCircle = faCheckCircle;
  faRulerCombined = faRulerCombined;
  faChartArea = faChartArea;
  faTriangleExclamation = faTriangleExclamation;
  faBullseye = faBullseye;
  faDraftingCompass = faDraftingCompass;

  isBinary: boolean | null = null;
  imagePreviewUrl: string | null = null;

  showBinaryToast: boolean = false;
  toastTimeout: any;

  showSteps: boolean = false;

  lastResult: ResultRow | null = null;

  pointsCount: number = 10000; // Valor inicial por defecto

  resultHistory: ResultRow[] = [];

  isLoading = false;
  loadingMessage = '';


  /* CREAR Y VALIDAR IMAGEN */

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result as string;
    };

    img.onload = () => {
      const canvasEl = this.canvas.nativeElement;
      canvasEl.width = img.width;
      canvasEl.height = img.height;

      const ctx = canvasEl.getContext('2d')!;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const pixels = imageData.data;

      this.isBinary = this.validateBinaryImage(pixels);
      if (this.isBinary) {
        this.imagePreviewUrl = reader.result as string;
      }
  // ✅ Validar si es imagen binaria
    this.isBinary = this.validateBinaryImage(pixels);

    // Mostrar preview si es válida
    if (this.isBinary) {
      this.imagePreviewUrl = reader.result as string;
    }

    // ✅ Mostrar el toast flotante por 4 segundos
    this.showBinaryToast = true;
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.showBinaryToast = false;
    }, 4000);
    };

    reader.readAsDataURL(file);


  }

  validateBinaryImage(pixels: Uint8ClampedArray): boolean {
    for (let i = 0; i < pixels.length; i += 4) {
      const [r, g, b, a] = [pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]];

      // validacion 100% robusta, no acepta nada que paresca gris
      // back and whithe
      const isBlack = r === 0 && g === 0 && b === 0;
      const isWhite = r === 255 && g === 255 && b === 255;

      if (!isBlack && !isWhite) {
        return false; // color no permitido
      }
    }
    return true;
  }


  /* GENERAR PUNTOS */
  /* Paso 1: Generar n puntos aleatorios dentro del canvas */
  generateRandomPoints(n: number, width: number, height: number): { x: number; y: number }[] {
    const points = [];

    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);
      points.push({ x, y });
    }

    return points;
  }

  /* VERIFICAR PUNTOS */
  /* Paso 2: Verificar si un punto está sobre la mancha (píxel blanco) */
  isPointOnStain(x: number, y: number, ctx: CanvasRenderingContext2D): boolean {
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = pixel;

    // Mismo margen de error que antes
    return r >= 225 && g >= 225 && b >= 225; // blanco
  }


  /* CALCULAR AREA ESTIMADA */
  /* Paso 3: Calcular el área estimada */
  calculateStainArea(n: number): void {

    this.isLoading = true;
    this.loadingMessage = 'Verificando imagen…';

    setTimeout(() => {
        this.loadingMessage = 'Calculando puntos…';

        const canvasEl = this.canvas.nativeElement;
        const ctx = canvasEl.getContext('2d')!;
        const width = canvasEl.width;
        const height = canvasEl.height;

        const randomPoints = this.generateRandomPoints(n, width, height);

        let pointsOnStain = 0;

        for (const point of randomPoints) {
          if (this.isPointOnStain(point.x, point.y, ctx)) {
            pointsOnStain++;
          }
        }

        const totalArea = width * height;
        const estimatedStainArea = totalArea * (pointsOnStain / n);

        console.log(`Puntos sobre la mancha: ${pointsOnStain} / ${n}`);
        console.log(`Área estimada: ${estimatedStainArea}`);

        // Puedes guardarlo en propiedades para mostrarlo en la vista
        this.lastResult = {
          totalPoints: n,
          pointsOnStain,
          totalArea,
          estimatedStainArea,
          date: new Date()
        };


     // 2. Recupera historial actual desde el storage (si existe)
        const existing = JSON.parse(localStorage.getItem('historial') || '[]');

        // 3. Crea un nuevo historial actualizado
        const updatedHistory = [...existing, this.lastResult];

        // 4. Guarda en memoria y en el storage
        this.resultHistory = updatedHistory;
        localStorage.setItem('historial', JSON.stringify(updatedHistory));

        setTimeout(() => {
          this.loadingMessage = 'Resultados listos';
          const pointsCanvasEl = this.pointsCanvas.nativeElement;
          const pointsCtx = pointsCanvasEl.getContext('2d')!;
          pointsCanvasEl.width = width;
          pointsCanvasEl.height = height;

          // 1. Dibuja la imagen base
          pointsCtx.drawImage(this.canvas.nativeElement, 0, 0);

          // 2. Dibuja los puntos encima
          for (const point of randomPoints) {
            const isStain = this.isPointOnStain(point.x, point.y, ctx);
            pointsCtx.fillStyle = isStain ? 'rgba(0, 200, 0, 0.8)' : 'rgba(255, 0, 0, 0.5)';
            pointsCtx.fillRect(point.x, point.y, 1, 1); // puedes usar tamaño 2 o 3 si quieres más visibles
          }

          setTimeout(() => {
            this.isLoading = false;
             // Cerrar pasos si estaban abiertos
            this.showSteps = false;
          }, 800);
        }, 1000);
    }, 1000);
  }

  isSampleTooLow(): boolean {
    if (!this.lastResult) return false;
    return this.lastResult.pointsOnStain / this.lastResult.totalPoints < 0.01;
  }

}
