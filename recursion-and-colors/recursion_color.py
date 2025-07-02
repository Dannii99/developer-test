# Pedimos la cantidad de discos
n = int(input("\n¿Cuántos discos vas a usar? (1 a 8): "))

# Verificamos que esté en el rango permitido
if n < 1 or n > 8:
    print("La cantidad de discos debe estar entre 1 y 8.")
    exit()

# Lista para guardar los discos
discos = []


for i in range(n):
    color = input(f"  → Color del disco {i+1}: ").strip()
    tamaño = n - i
    discos.append((tamaño, color))

# Mostramos los discos ingresados
print("\nDiscos ingresados:", discos)

# Representación inicial de las torres
print("\nEstado inicial de las torres:\n")

altura = len(discos)  # cuántos niveles tiene la torre A

# Recorremos desde arriba hacia abajo
for i in range(altura - 1, -1, -1):
    disco = discos[i]
    # Mostramos disco solo en Torre A
    print(f"{str(disco).center(15)}{'|'.center(15)}{'|'.center(15)}")

# Base de las torres
print("  ________       ________       ________")
print("   Torre A        Torre B        Torre C\n")

def juego_torres(discos):
    torre_a = discos.copy()    # Origen
    torre_b = []              # Auxiliar
    torre_c = []              # Destino
    movimientos = []          # Historial

     # Regla: validar si un disco puede moverse a una torre
    def puede_mover(disco, torre_destino):
        if not torre_destino:
            return True
        tope = torre_destino[-1]
        if disco[0] > tope[0]:
            return False
        if disco[1] == tope[1]:
            return False
        return True

    # Función para mover un disco de una torre a otra
    def mover_de(origen, destino):
        torre_origen = torres[origen]
        torre_destino = torres[destino]

        if not torre_origen:
            raise Exception("Torre de origen vacía")

        disco = torre_origen[-1]
        if puede_mover(disco, torre_destino):
            torre_origen.pop()
            torre_destino.append(disco)
            movimientos.append((disco[0], origen, destino))
            return True
        else:
            raise Exception("Movimiento inválido por regla de tamaño o color")

    # Recursión principal estilo Torre de Hanoi
    def hanoi(n, origen, destino, auxiliar):
        if n == 0:
            return
        hanoi(n-1, origen, auxiliar, destino)
        mover_de(origen, destino)
        hanoi(n-1, auxiliar, destino, origen)

    # Diccionario para acceder a torres con nombre
    torres = {"A": torre_a, "B": torre_b, "C": torre_c}

    # Llamada recursiva inicial
    try:
        hanoi(len(discos), "A", "C", "B")
    except:
        print("\nResultado: -1")
        return -1

    # Mostrar movimientos realizados
    print("\nMovimientos realizados:")

    print("[")
    for mov in movimientos:
        print(f" ({mov[0]}: '{mov[1]}', '{mov[2]}'), ")
    print("]")

    # Mostrar estado final
    print("\nEstado final de las torres:")
    for i in range(len(discos) - 1, -1, -1):
        col_a = str(torre_a[i]) if i < len(torre_a) else "|"
        col_b = str(torre_b[i]) if i < len(torre_b) else "|"
        col_c = str(torre_c[i]) if i < len(torre_c) else "|"
        print(f"{col_a.center(15)}{col_b.center(15)}{col_c.center(15)}")

    print("  ________       ________       ________")
    print("   Torre A        Torre B        Torre C\n")

    return movimientos


resultado1 = juego_torres(discos)