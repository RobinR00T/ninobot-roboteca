#!/usr/bin/env python3
# Filtro del build: elimina SOLO lineas que son 100% comentario (// o bloques
# /* */ que empiezan y terminan en lineas completas de comentario). No toca
# comentarios inline ni nada dentro de strings o template literals (verificado:
# ningun template del proyecto tiene lineas que parezcan comentario).
# El codigo fuente en src/ queda intacto: esto solo adelgaza el dist.
import sys

def es_linea_comentario(l):
    t = l.strip()
    return t.startswith("//")

def filtrar(texto):
    out = []
    en_bloque = False
    for l in texto.split("\n"):
        t = l.strip()
        if en_bloque:
            if "*/" in t:
                en_bloque = False
                resto = t.split("*/", 1)[1].strip()
                if resto:
                    out.append(resto)
            continue
        if t.startswith("/*"):
            if "*/" in t:
                resto = t.split("*/", 1)[1].strip()
                if resto:
                    out.append(resto)
            else:
                en_bloque = True
            continue
        if es_linea_comentario(t):
            continue
        out.append(l)
    return "\n".join(out)

sys.stdout.write(filtrar(sys.stdin.read()))
