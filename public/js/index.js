var selected_bpm = document.getElementById('selected_bpm').textContent; 
alert(selected_bpm); 


const ongaq = new Ongaq ({
	api_key: "b2f52d085245478087c08fa83c45f0ee",
	volume: 80,
	bpm: selected_bpm,
	onReady: () => {

		const button = document.getElementById("button")
		button.className = "button start"

		button.onclick = () => {
			if (ongaq.params.isPlaying) {
				ongaq.pause()
				button.className = "button start"
			} else {
				ongaq.start()
				button.className = "button pause"
			}
		}

	}
})




const my_drums = new Part ({
	sound: "my_band_drums",
	measure: 8,
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16
})

my_drums.add(new Filter ({
	key: "hihat",
	active: beat => beat % 4===0
}))

my_drums.add(new Filter ({
	key: "kick",
	active: beat => beat % 16===0
}))

my_drums.add(new Filter ({
	key: "snare",
	active: beat => beat ===8
}))


ongaq.add(my_drums)







const C =new Chord("C",{octave :2})
const D =new Chord("C",{octave :2})
const E =new Chord("C",{octave :2})
const F =new Chord("C",{octave :2})
const G =new Chord("C",{octave :2})
const A =new Chord("C",{octave :2})
const B =new Chord("C",{octave :2})

const CM7 =new Chord("CM7",{octave :2})
const DM7 =new Chord("CM7",{octave :2})
const EM7 =new Chord("CM7",{octave :2})
const FM7 =new Chord("CM7",{octave :2})
const GM7 =new Chord("CM7",{octave :2})
const AM7 =new Chord("CM7",{octave :2})
const BM7 =new Chord("CM7",{octave :2})

const C7 =new Chord("C7",{octave :2})
const D7 =new Chord("C7",{octave :2})
const E7 =new Chord("C7",{octave :2})
const F7 =new Chord("C7",{octave :2})
const G7 =new Chord("C7",{octave :2})
const A7 =new Chord("C7",{octave :2})
const B7 =new Chord("C7",{octave :2})

const Cm =new Chord("Cm",{octave :2})
const Dm =new Chord("Cm",{octave :2})
const Em =new Chord("Cm",{octave :2})
const Fm =new Chord("Cm",{octave :2})
const Gm =new Chord("Cm",{octave :2})
const Am =new Chord("Cm",{octave :2})
const Bm =new Chord("Cm",{octave :2})

const Cm7 =new Chord("Cm7",{octave :2})
const Dm7 =new Chord("Cm7",{octave :2})
const Em7 =new Chord("Cm7",{octave :2})
const Fm7 =new Chord("Cm7",{octave :2})
const Gm7 =new Chord("Cm7",{octave :2})
const Am7 =new Chord("Cm7",{octave :2})
const Bm7 =new Chord("Cm7",{octave :2})

const CmM7 =new Chord("CmM7",{octave :2})
const DmM7 =new Chord("CmM7",{octave :2})
const EmM7 =new Chord("CmM7",{octave :2})
const FmM7 =new Chord("CmM7",{octave :2})
const GmM7 =new Chord("CmM7",{octave :2})
const AmM7 =new Chord("CmM7",{octave :2})
const BmM7 =new Chord("CmM7",{octave :2})

const C6th =new Chord("C6th",{octave :2})
const D6th =new Chord("C6th",{octave :2})
const E6th =new Chord("C6th",{octave :2})
const F6th =new Chord("C6th",{octave :2})
const G6th =new Chord("C6th",{octave :2})
const A6th =new Chord("C6th",{octave :2})
const B6th =new Chord("C6th",{octave :2})

const Cm6 =new Chord("Cm6",{octave :2})
const Dm6 =new Chord("Cm6",{octave :2})
const Em6 =new Chord("Cm6",{octave :2})
const Fm6 =new Chord("Cm6",{octave :2})
const Gm6 =new Chord("Cm6",{octave :2})
const Am6 =new Chord("Cm6",{octave :2})
const Bm6 =new Chord("Cm6",{octave :2})

const Cdim =new Chord("Cdim",{octave :2})
const Ddim =new Chord("Cdim",{octave :2})
const Edim =new Chord("Cdim",{octave :2})
const Fdim =new Chord("Cdim",{octave :2})
const Gdim =new Chord("Cdim",{octave :2})
const Adim =new Chord("Cdim",{octave :2})
const Bdim =new Chord("Cdim",{octave :2})

const Caug =new Chord("Caug",{octave :2})
const Daug =new Chord("Caug",{octave :2})
const Eaug =new Chord("Caug",{octave :2})
const Faug =new Chord("Caug",{octave :2})
const Gaug =new Chord("Caug",{octave :2})
const Aaug =new Chord("Caug",{octave :2})
const Baug =new Chord("Caug",{octave :2})

const CM9 =new Chord("CM9",{octave :2})
const DM9 =new Chord("CM9",{octave :2})
const EM9 =new Chord("CM9",{octave :2})
const FM9 =new Chord("CM9",{octave :2})
const GM9 =new Chord("CM9",{octave :2})
const AM9 =new Chord("CM9",{octave :2})
const BM9 =new Chord("CM9",{octave :2})

const Cm9 =new Chord("Cm9",{octave :2})
const Dm9 =new Chord("Cm9",{octave :2})
const Em9 =new Chord("Cm9",{octave :2})
const Fm9 =new Chord("Cm9",{octave :2})
const Gm9 =new Chord("Cm9",{octave :2})
const Am9 =new Chord("Cm9",{octave :2})
const Bm9 =new Chord("Cm9",{octave :2})


const my_guitar = new Part ({
	sound: "plain_keyboard",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

my_guitar.add( new Filter ({
	key: (beat, measure)=>{
		return measure === 0 ? Cm9
			: measure === 1 ? Gaug
			: measure === 2 ? Cm9
			: measure === 3 ? Caug
			: measure === 4 ? Cm9
			: measure === 5 ? Faug
			: measure === 6 ? Cm9
			: Faug
	},
	length: (beat, measure)=>{
		return measure === 0 ? 15 
			: measure === 1? 15 
			: measure === 2? 15 
			: measure === 3? 15 
			: measure === 4? 15 
			: measure === 5? 15 
			: measure === 6? 15 
			: 15
	},
	active: (beat, measure) =>{
		return (beat === 0 && measure === 0) 
			|| (beat === 0 && measure === 1)
			|| (beat === 0 && measure === 2)
			|| (beat === 0 && measure === 3)
			|| (beat === 0 && measure === 4)
			|| (beat === 0 && measure === 5)
			|| (beat === 0 && measure === 6)
			|| (beat === 0 && measure === 7)
	}
}) )



ongaq.add( my_guitar )







// condition ? exprIfTrue : exprIfFalse

// condition
// 値が条件として使用される式です。

// exprIfTrue
// condition が truthy の値 (true と等しいか、 true に変換できる値) と評価された場合に評価される式です。

// exprIfFalse
// condition が falsy の値 (false と等しいか、 false に変換できる値) と評価された場合に評価される式です。
