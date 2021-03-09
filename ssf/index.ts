// Serial String Fuckery
// 2021, 0zl.

export function E(T: string) {
    const K = '4dxjYzF6.2M/EK5a1mO"H&-s7;_NTWf@8=Ig0*eZw3B \'k:9RD%h#+rPXGluUqnCAQypLSovcbtJiV'
        
    let X = ''
    let C = 0

    for ( let V of T ) {
        C++
        X += K.indexOf(V)

        if ( C < T.length ) X += '-'
    }

    return X
}

export function D(T: string) {
    const K = '4dxjYzF6.2M/EK5a1mO"H&-s7;_NTWf@8=Ig0*eZw3B \'k:9RD%h#+rPXGluUqnCAQypLSovcbtJiV'
    let X = ''

    for ( let V of T.split('-') ) X += K[parseInt(V)]
    return X
}