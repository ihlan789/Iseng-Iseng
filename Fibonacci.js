function fibonacci(kolom,baris){
		let output='';
		let hasil = [];
		let jumlah = kolom*baris;
		hasil[0] = 0;
		hasil[1] = 1;
		for (let fib = 1; fib < jumlah; fib++) {
			hasil.push(hasil[fib]+hasil[fib-1]);
		}

		let spasi = [];

		let revSpasi=spasi.reverse();
		for(let en=0;en<hasil.length-1;en++){
			output+=hasil[en] +',';
			let ep=parseInt(en)+1;
			ep = ep%parseInt(kolom)==0;
			if (ep) {
				output+='\n';
			}
		}


		return output
	}


console.log(fibonacci(7,3))