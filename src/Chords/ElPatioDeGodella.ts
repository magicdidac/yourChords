import { Song } from "../interfaces"

const html = `
     Am
Cementerio donde vivo
      G
Donde me iban a llevar
      F
Mamá, habla con el juez
        E
Que me dé la libertad

      Am
Yo no niego haber robaodo
       G
Ni tampoco haber mataodo
      F
Yo no tengo esa fe
      E
Ni tampoco la tendré

      Am
En el patio de Godella
       G
Hay un charco y no ha lloviodo
        F
Son las lágrimas de un preso
         E
Que ha entraodo y no ha saliodo

       Am
Cuando salga de Godella
       G
Con mi madre me encontraré
       F
Con un porrito en la mano
    E             Am
Una rosa y un clavel

G
Oh oh oh oh
F
Oh oh oh oh
E
Espérame
`

const lyrics = `
Cementerio donde vivo
Donde me iban a lleva'
Mamá, habla con el jue'
Que me de la libertad

Yo no niego haber roba'o
Ni tampoco haber mata'o
Yo no tengo esa fe
Ni tampoco la tendré

En el patio de Godella
Hay un charco y no ha llovi'o
Son las lágrimas de un preso
Porque ha entra'o y no ha sali'o

Cuando salga de Godella
Con mi madre me encontraré
Con un porrito en la mano
Una rosa y un clavel

Oh-oh-oh-oh
Oh-oh-oh-oh
Espérame
`

export const ElPatioDeGodella: Song = {
      id: 'elpatiodegodella',
      name: 'El patio de Godella',
      artists: ['Maritune'],
      thumbnail: 'https://lh3.googleusercontent.com/EF9iw9mI01A-zs81MqjzoX9CfW7fOqWuorlJ4BgJ4Fp5AzKGRZQa_VzbMDoKsap1hJIWmNPs1fgVSto=w544-h544-l90-rj',
      audio: 'https://www.youtube.com/watch?v=rUt2x6LFcI4',
      chords: ['Am', 'G', 'F', 'E'],
      lyrics,
      html
} 