import { Song } from "../interfaces"

const html = `
  Am(p)         Am(p)       Am
Estoy entre una niña y el hachís
                                                    G
Yo la quiero mucha ella, pero el hachís me quiere a mí
                                             F
Ya no sé cómo cambiar porque si no me va a dejar
                                          E
Pro cuando veo un porro no me puedo controlar
                          Am
Ami me gusta mucho la cocaína
                                               G
Era una de las cosas que ya he dejado por la niña
                                            F
Me costó mucho trabajo, yo me metía to' los días
                                        E
Yo iba pa' las tres pa' mis compis y pa' mí

       Am                      G
Que yo sé que un pitillo nunca me va a dar pa' na
     F                           E
Si no voy a la valentina, voy al polígono a pillar
      Am                 G
Sin embargo, una niña me puede pirulear
     F                     E
Y mi corazón porreta me lo puede destrozar
`

const lyrics = `
Estoy entre una niña y el hachís
Yo la quiero mucha ella, pero el hachís me quiere a mí
Ya no sé cómo cambiar porque si no me va a dejar
Pro cuando veo un porro no me puedo controlar
Ami me gusta mucho la cocaína
Era una de las cosas que ya he dejado por la niña
Me costó mucho trabajo, yo me metía to' los días
Yo iba pa' las tres pa' mis compis y pa' mí

Que yo sé que un pitillo nunca me va a dar pa' na
Si no voy a la valentina, voy al polígono a pillar
Sin embargo, una niña me puede pirulear
Y mi corazón porreta me lo puede destrozar
`

export const LaNinaYElHachis: Song = {
     id: 'laninayelhachis',
     name: 'La Niña y el Hachis',
     artists: ['El Gamito'],
     thumbnail: 'https://lh3.googleusercontent.com/BzVp21o4nIVB15yHRCbujL5lo3Q0IS6XB5qyt_K5KEnMLHRmgvET9p1nhkgx2apmfedgE1-bERJsoBtA=w544-h544-l90-rj',
     audio: 'https://www.youtube.com/watch?v=Iqes7ILJbiY',
     chords: ['Am', 'G', 'F', 'E'],
     lyrics,
     html
} 