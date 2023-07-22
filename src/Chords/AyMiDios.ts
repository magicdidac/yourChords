import { Song } from "../interfaces"

const html = `
                 C(p)
Quizá se le olvidó
        G(p)
Que los besos más humildes le borraron
                    Am(p)
De la piel el channel
              G(p)                  F(p)
Yo no reclamo na, eso quedó en el ayer
       C(p)                                        F(p)
Agradecerle a estos ojos que la vieron llorar una vez
        E(p)
Y ya tú ves

                 F
Quizás se le olvidó
                                              G
Decir que me quería esa tarde tan fría de invierno
        Em                                        F
Por prestarle atención a la ropa, a la cara y el cuerpo
                  E
Quizás se le olvidó

[Estribillo]
        C
Ay mi Dios, quizás perdí en la batalla
                        G
Porqué él que merece lo pide
                                                 Am
Que me amara y quisiera de la forma en que yo lo hice
        F                                 E
Es que amar con habilidad nunca ha sido posible
                    F
Yo no me niego al amor, no me niego a nada
                                        G
Que me dé pasión, yo no me niego a sus besos
Que son traicioneros y matan de dolor
                F
Si soy sentimental
Cuando te acuestes con otro
                        G
Ya tú verás que no es igual
            E
Lo vas a lamentar

# Rap, Rumba sorda
Hiciste lo que hiciste cuando quisiste con quien quisiste
Y quieres volver, pero ya no es lo mismo
Rompiste mi corazón sin compasión
Jugaste con mis sentimientos y mi amor
Date una vuelta que llegó mi momento
No quiero verte ya sé que estás sufriendo
Mami, good bye bye que esta es la despedida
Ya que Dios se lo dio

[Estribillo]

      C
Ay mi Dios
`

const lyrics = `
Quizá se le olvidó
Que los besos más humildes le borraron
De la piel el channel
Yo no reclamo na, eso quedó en el ayer
Agradecerle a estos ojos que la vieron llorar una vez
Y ya tú ves

Quizás se le olvidó
Decir que me quería esa tarde tan fría de invierno
Por prestarle atención a la ropa, a la cara y el cuerpo
Quizás se le olvidó

Ay mi Dios, quizás perdí en la batalla
Porqué él que merece lo pide
Que me amara y quisiera de la forma en que yo lo hice
Es que amar con habilidad nunca ha sido posible
Yo no me niego al amor, no me niego a nada
Que me dé pasión, yo no me niego a sus besos
Que son traicioneros y matan de dolor
Si soy sentimental
Cuando te acuestes con otro
Ya tú verás que no es igual
Lo vas a lamentar

Hiciste lo que hiciste cuando quisiste con quien quisiste
Y quieres volver, pero ya no es lo mismo
Rompiste mi corazón sin compasión
Jugaste con mis sentimientos y mi amor
Date una vuelta que llegó mi momento
No quiero verte ya sé que estás sufriendo
Mami, good bye bye que esta es la despedida
Ya que Dios se lo dio

Ay mi Dios, quizás perdí en la batalla
Porque él que merece lo pide
Que me amara y quisiera de la forma en que yo lo hice
Es que amar con habilidad nunca ha sido posible
Yo no me niego al amor, no me niego a nada
Que me dé pasión, yo no me niego a sus besos
Que son traicioneros y matan de dolor
Si soy sentimental
Cuando te acuestes con alguien
Ya tú verás que no es igual
Lo vas a lamentar

Ay mi Dios
`

export const AyMiDios: Song = {
        id: 'aymidios',
        name: 'Ay mi Dios',
        artists: ['Yandel', 'El duende callejero'],
        thumbnail: 'https://i.ytimg.com/vi/FDlvC6O3-18/sddefault.jpg?sqp=-oaymwEWCKoDEPABIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lgK4ZSeEKPz8_1Cy2rq1j8E7wOCg',
        audio: 'https://www.youtube.com/watch?v=FDlvC6O3-18',
        capo: 3,
        chords: ['C', 'G', 'Am', 'F', 'E', 'Em'],
        lyrics,
        html
} 