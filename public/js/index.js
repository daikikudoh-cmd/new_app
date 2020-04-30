var selected_bpm = document.getElementById('selected_bpm').textContent; 

alert(selected_bpm); 



const ongaq = new Ongaq ({
	api_key: "b2f52d085245478087c08fa83c45f0ee",
	volume: 100,
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
const D =new Chord("D",{octave :2})
const E =new Chord("E",{octave :2})
const F =new Chord("F",{octave :2})
const G =new Chord("G",{octave :2})
const A =new Chord("A",{octave :2})
const B =new Chord("B",{octave :2})

const CM7 =new Chord("CM7",{octave :2})
const DM7 =new Chord("DM7",{octave :2})
const EM7 =new Chord("EM7",{octave :2})
const FM7 =new Chord("FM7",{octave :2})
const GM7 =new Chord("GM7",{octave :2})
const AM7 =new Chord("AM7",{octave :2})
const BM7 =new Chord("BM7",{octave :2})

const C7 =new Chord("C7",{octave :2})
const D7 =new Chord("D7",{octave :2})
const E7 =new Chord("E7",{octave :2})
const F7 =new Chord("F7",{octave :2})
const G7 =new Chord("G7",{octave :2})
const A7 =new Chord("A7",{octave :2})
const B7 =new Chord("B7",{octave :2})

const Cm =new Chord("Cm",{octave :2})
const Dm =new Chord("Dm",{octave :2})
const Em =new Chord("Em",{octave :2})
const Fm =new Chord("Fm",{octave :2})
const Gm =new Chord("Gm",{octave :2})
const Am =new Chord("Am",{octave :2})
const Bm =new Chord("Bm",{octave :2})

const Cm7 =new Chord("Cm7",{octave :2})
const Dm7 =new Chord("Dm7",{octave :2})
const Em7 =new Chord("Em7",{octave :2})
const Fm7 =new Chord("Fm7",{octave :2})
const Gm7 =new Chord("Gm7",{octave :2})
const Am7 =new Chord("Am7",{octave :2})
const Bm7 =new Chord("Bm7",{octave :2})

const CmM7 =new Chord("CmM7",{octave :2})
const DmM7 =new Chord("DmM7",{octave :2})
const EmM7 =new Chord("EmM7",{octave :2})
const FmM7 =new Chord("FmM7",{octave :2})
const GmM7 =new Chord("GmM7",{octave :2})
const AmM7 =new Chord("AmM7",{octave :2})
const BmM7 =new Chord("BmM7",{octave :2})

const C6th =new Chord("C6th",{octave :2})
const D6th =new Chord("D6th",{octave :2})
const E6th =new Chord("E6th",{octave :2})
const F6th =new Chord("F6th",{octave :2})
const G6th =new Chord("G6th",{octave :2})
const A6th =new Chord("A6th",{octave :2})
const B6th =new Chord("B6th",{octave :2})

const Cm6 =new Chord("Cm6",{octave :2})
const Dm6 =new Chord("Dm6",{octave :2})
const Em6 =new Chord("Em6",{octave :2})
const Fm6 =new Chord("Fm6",{octave :2})
const Gm6 =new Chord("Gm6",{octave :2})
const Am6 =new Chord("Am6",{octave :2})
const Bm6 =new Chord("Bm6",{octave :2})

const Cdim =new Chord("Cdim",{octave :2})
const Ddim =new Chord("Ddim",{octave :2})
const Edim =new Chord("Edim",{octave :2})
const Fdim =new Chord("Fdim",{octave :2})
const Gdim =new Chord("Gdim",{octave :2})
const Adim =new Chord("Adim",{octave :2})
const Bdim =new Chord("Bdim",{octave :2})

const Caug =new Chord("Caug",{octave :2})
const Daug =new Chord("Daug",{octave :2})
const Eaug =new Chord("Eaug",{octave :2})
const Faug =new Chord("Faug",{octave :2})
const Gaug =new Chord("Gaug",{octave :2})
const Aaug =new Chord("Aaug",{octave :2})
const Baug =new Chord("Baug",{octave :2})

const CM9 =new Chord("CM9",{octave :2})
const DM9 =new Chord("DM9",{octave :2})
const EM9 =new Chord("EM9",{octave :2})
const FM9 =new Chord("FM9",{octave :2})
const GM9 =new Chord("GM9",{octave :2})
const AM9 =new Chord("AM9",{octave :2})
const BM9 =new Chord("BM9",{octave :2})

const Cm9 =new Chord("Cm9",{octave :2})
const Dm9 =new Chord("Dm9",{octave :2})
const Em9 =new Chord("Em9",{octave :2})
const Fm9 =new Chord("Fm9",{octave :2})
const Gm9 =new Chord("Gm9",{octave :2})
const Am9 =new Chord("Am9",{octave :2})
const Bm9 =new Chord("Bm9",{octave :2})



/*******************************
*王道
*FーGーEmーAm
********************************/

const piano1 = new Part ({
	sound: "plain_keyboard",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

piano1.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

piano1.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

piano1.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

piano1.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

piano1.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

piano1.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

piano1.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

piano1.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )


/*******************************
*Just The Two of Us
*FM7ーE7ーAm7ーC7
********************************/
const piano2 = new Part ({
	sound: "plain_keyboard",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

piano2.add( new Filter ({
	key:  FM7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

piano2.add( new Filter ({
	key:  E7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

piano2.add( new Filter ({
	key:  Am7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

piano2.add( new Filter ({
	key:  C7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

piano2.add( new Filter ({
	key:  FM7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

piano2.add( new Filter ({
	key:  E7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

piano2.add( new Filter ({
	key:  Am7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

piano2.add( new Filter ({
	key:  C7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )


/*******************************
*4156進行
*FーCーGーAm
********************************/

const piano3 = new Part ({
	sound: "plain_keyboard",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

piano3.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

piano3.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

piano3.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

piano3.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

piano3.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

piano3.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

piano3.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

piano3.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )


/*******************************
*カノン進行
*CーGーAmーEmーFーCーFーG
********************************/
const piano4 = new Part ({
	sound: "plain_keyboard",
	measure: 16, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

piano4.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

piano4.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

piano4.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

piano4.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

piano4.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

piano4.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

piano4.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

piano4.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )
piano4.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 8
}) )

piano4.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 9
}) )

piano4.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure ===10
}) )

piano4.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 11
}) )

piano4.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 12
}) )

piano4.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 13
}) )

piano4.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 14
}) )

piano4.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 15
}) )

/*******************************
*小室進行
*AmーFーGーC
********************************/

const piano5 = new Part ({
	sound: "plain_keyboard",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

piano5.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

piano5.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

piano5.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

piano5.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

piano5.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

piano5.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

piano5.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

piano5.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )

/*******************************
*レット・イット・ビー進行
*CーGーAmーF
********************************/
const piano6 = new Part ({
	sound: "plain_keyboard",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

piano6.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

piano6.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

piano6.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

piano6.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

piano6.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

piano6.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

piano6.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

piano6.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )

/*******************************
*1625進行
*CーAm7ーDm7ーG7
********************************/
const piano7 = new Part ({
	sound: "plain_keyboard",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

piano7.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

piano7.add( new Filter ({
	key:  Am7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

piano7.add( new Filter ({
	key:  Dm7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

piano7.add( new Filter ({
	key:  G7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

piano7.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

piano7.add( new Filter ({
	key:  Am7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

piano7.add( new Filter ({
	key:  Dm7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

piano7.add( new Filter ({
	key:  G7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )
/*******************************
*6415進行
*AmーFーCーG
********************************/
const piano8 = new Part ({
	sound: "plain_keyboard",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

piano8.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

piano8.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

piano8.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

piano8.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

piano8.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

piano8.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

piano8.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

piano8.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )

/*******************************
*3456進行
*EmーFーGーAm
********************************/
const piano9 = new Part ({
	sound: "plain_keyboard",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

piano9.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

piano9.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

piano9.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

piano9.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

piano9.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

piano9.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

piano9.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

piano9.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )



var selected_Chord = document.getElementById('selected_Chord').innerText; 

console.log(selected_Chord);

if (selected_Chord == "piano1") {
ongaq.add(piano1);
} else if (selected_Chord == "piano2") {
ongaq.add(piano2);
} else if (selected_Chord == "piano3") {
ongaq.add(piano3);
} else if (selected_Chord == "piano4") {
ongaq.add(piano4);
} else if (selected_Chord == "piano5") {
ongaq.add(piano5);
} else if (selected_Chord == "piano6") {
ongaq.add(piano6);
} else if (selected_Chord == "piano7") {
ongaq.add(piano7);
} else if (selected_Chord == "piano8") {
ongaq.add(piano8);
} 
else {
ongaq.add(piano9);
}






1) Diatonic major scale

1) Natural minor scale
C D D#(E♭) F G G#(A♭) A#(B♭)

2) Harmonic minor scale
C D D#(E♭) F G G#(A♭) B
　
3) Melodic minor scale


1) Ionian scale


2) Dorian scale


3) Phrygian scale


4) Lydian scale


5) Mixolydian scale


6) Aeolian scale


7) Locrian scale


1) Lydian ♭7th scale


2) Altered scale


3) Harmonic minor scale P5th below


1) Major pentatonic scale


minor pentatonic scale


2) Blue note pentatonic scale


3) Blue note scale


4) Altered Dorian scale


5) Combination of diminished scale


6) Whole tone scale


7) Diminished scale
















// var random = Math.floor( Math.random() * 5 );

// function random(array, num) {
//   var a = array;
//   var t = [];
//   var r = [];
//   var l = a.length;
//   var n = num < l ? num : l;
//   while (n-- > 0) {
//     var i = Math.random() * l | 0;
//     r[n] = t[i] || a[i];
//     --l;
//     t[i] = t[l] || a[l];
//   }
//   return r;
// }

// var measure_array = [0, 1, 2, 3, 0, 1, 2, 3];
// var random_measure=random(measure_array, 7);

// var beat_array = [0,4,8,0,4,8,0,4];
// var random_beat=random(beat_array, 7);



const guitar = new Part ({
	sound: "rock_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

guitar.add( new Filter ({
	key: "C2",
	length: 4,
	active: (beat, measure) => beat === 0 && measure === 0 //0小節の0拍目
}) )

guitar.add( new Filter ({
	key: "D2",
	length: 4,
	active: (beat, measure) => beat === 8 && measure === 0
}) )

guitar.add( new Filter ({
	key: "E2",
	length: 4,
	active: (beat, measure) => beat === 0 && measure === 1
}) )

guitar.add( new Filter ({
	key: "F2",
	length: 4,
	active: (beat, measure) => beat === 8 && measure === 1
}) )

guitar.add( new Filter ({
	key: "E2",
	length: 4,
	active: (beat, measure) => beat === 0 && measure === 2
}) )

guitar.add( new Filter ({
	key: "D2",
	length: 4,
	active: (beat, measure) => beat === 8 && measure === 2
}) )

guitar.add( new Filter ({
	key: "C2",
	length: 4,
	active: (beat, measure) => beat === 0 && measure === 3
}) )



ongaq.add( guitar )




// condition ? exprIfTrue : exprIfFalse

// condition
// 値が条件として使用される式です。

// exprIfTrue
// condition が truthy の値 (true と等しいか、 true に変換できる値) と評価された場合に評価される式です。

// exprIfFalse
// condition が falsy の値 (false と等しいか、 false に変換できる値) と評価された場合に評価される式です。
