// Wrong for [1, 2, 3]: Does not output [3, 2, 1]

function permutations(a){
    var  generate = (k) => {
        if(k==1){
            console.log(a);
        }else{
            generate(k-1)

            for (let i = 0; i < k-1; i++) {
                if(k%2){
                    swap(i, k-1)
                }else{
                    swap(0, k-1)
                }

                generate(k-1)
            }
        }
    }

    var swap =  (i, j) => {
        const t = a[i];
        a[i] = a[j]
        a[j] = t;
    }

    generate(a.length)
}

permutations([1, 2, 3])

// https://en.wikipedia.org/wiki/Heap%27s_algorithm