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













/*******************************
*コード
*
********************************/

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
*構成音
*
********************************/

const C_composition =['C2','E2','G2',]
const Cm_composition =['C2','D2#','G2',]
const Caug_composition =['C2','E2','G2#',]
const C7_composition =['C2','E2','G2','A2#']
const CM7_composition =['C2','E2','G2','B2']
const Cm7_composition =['C2','D2#','G2','A2#']
const D_composition =['D2','F2#','A2',]
const Dm_composition =['D2','F2','A2',]
const Daug_composition =['D2','F2#','A2#',]
const D7_composition =['D2','F2#','A2','C2']
const DM7_composition =['D2','F2#','A2','C2#']
const Dm7_composition =['D2','F2','A2','C2']
const E_composition =['E2','G2#','B2',]
const Em_composition =['E2','G2','B2',]
const Eaug_composition =['E2','G2#','C2',]
const E7_composition =['E2','G2#','B2','D2']
const EM7_composition =['E2','G2#','B2','D2#']
const Em7_composition =['E2','G2','B2','D2']
const F_composition =['F2','A2','C2',]
const Fm_composition =['F2','G2#','C2',]
const Faug_composition =['F2','A2','C2#',]
const F7_composition =['F2','A2','C2','D2#']
const FM7_composition =['F2','A2','C2','E2']
const Fm7_composition =['F2','G2#','C2','D2#']
const G_composition =['G2','B2','D2',]
const Gm_composition =['G2','A2#','D2',]
const Gaug_composition =['G2','B2','D2#',]
const G7_composition =['G2','B2','D2','F2']
const GM7_composition =['G2','B2','D2','F2#']
const Gm7_composition =['G2','A2#','D2','F2']
const A_composition =['A2','C2#','E2',]
const Am_composition =['A2','C2','E2',]
const Aaug_composition =['A2','C2#','F2',]
const A7_composition =['A2','C2#','E2','G2']
const AM7_composition =['A2','C2#','E2','G2#']
const Am7_composition =['A2','C2','E2','G2']
const B_composition =['B2','D2#','F2#',]
const Bm_composition =['B2','D2','F2#',]
const Baug_composition =['B2','D2#','G2',]
const B7_composition =['B2','D2#','F2#','A2']
const BM7_composition =['B2','D2#','F2#','A2#']
const Bm7_composition =['B2','D2','F2#','A2']

/*******************************
*王道
*FーGーEmーAm
********************************/

const FーGーEmーAm = new Part ({
	sound: "rock_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

FーGーEmーAm.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

FーGーEmーAm.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

FーGーEmーAm.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

FーGーEmーAm.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

FーGーEmーAm.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

FーGーEmーAm.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

FーGーEmーAm.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

FーGーEmーAm.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )


/*******************************
*Just The Two of Us
*FM7ーE7ーAm7ーC7
********************************/
const FM7ーE7ーAm7ーC7 = new Part ({
	sound: "rock_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

FM7ーE7ーAm7ーC7.add( new Filter ({
	key:  FM7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

FM7ーE7ーAm7ーC7.add( new Filter ({
	key:  E7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

FM7ーE7ーAm7ーC7.add( new Filter ({
	key:  Am7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

FM7ーE7ーAm7ーC7.add( new Filter ({
	key:  C7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

FM7ーE7ーAm7ーC7.add( new Filter ({
	key:  FM7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

FM7ーE7ーAm7ーC7.add( new Filter ({
	key:  E7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

FM7ーE7ーAm7ーC7.add( new Filter ({
	key:  Am7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

FM7ーE7ーAm7ーC7.add( new Filter ({
	key:  C7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )


/*******************************
*4156進行
*FーCーGーAm
********************************/

const FーCーGーAm = new Part ({
	sound: "rock_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

FーCーGーAm.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

FーCーGーAm.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

FーCーGーAm.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

FーCーGーAm.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

FーCーGーAm.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

FーCーGーAm.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

FーCーGーAm.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

FーCーGーAm.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )


/*******************************
*カノン進行
*CーGーAmーEmーFーCーFーG
********************************/
const CーGーAmーEmーFーCーFーG = new Part ({
	sound: "rock_guitar",
	measure: 16, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )
CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 8
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 9
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure ===10
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 11
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 12
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 13
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 14
}) )

CーGーAmーEmーFーCーFーG.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 15
}) )

/*******************************
*小室進行
*AmーFーGーC
********************************/

const AmーFーGーC = new Part ({
	sound: "rock_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

AmーFーGーC.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

AmーFーGーC.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

AmーFーGーC.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

AmーFーGーC.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

AmーFーGーC.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

AmーFーGーC.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

AmーFーGーC.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

AmーFーGーC.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )

/*******************************
*レット・イット・ビー進行
*CーGーAmーF
********************************/
const CーGーAmーF = new Part ({
	sound: "rock_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

CーGーAmーF.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

CーGーAmーF.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

CーGーAmーF.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

CーGーAmーF.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

CーGーAmーF.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

CーGーAmーF.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

CーGーAmーF.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

CーGーAmーF.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )

/*******************************
*1625進行
*CーAm7ーDm7ーG7
********************************/
const CーAm7ーDm7ーG7 = new Part ({
	sound: "rock_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

CーAm7ーDm7ーG7.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

CーAm7ーDm7ーG7.add( new Filter ({
	key:  Am7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

CーAm7ーDm7ーG7.add( new Filter ({
	key:  Dm7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

CーAm7ーDm7ーG7.add( new Filter ({
	key:  G7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

CーAm7ーDm7ーG7.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

CーAm7ーDm7ーG7.add( new Filter ({
	key:  Am7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

CーAm7ーDm7ーG7.add( new Filter ({
	key:  Dm7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

CーAm7ーDm7ーG7.add( new Filter ({
	key:  G7,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )
/*******************************
*6415進行
*AmーFーCーG
********************************/
const AmーFーCーG = new Part ({
	sound: "rock_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

AmーFーCーG.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

AmーFーCーG.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

AmーFーCーG.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

AmーFーCーG.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

AmーFーCーG.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

AmーFーCーG.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

AmーFーCーG.add( new Filter ({
	key:  C,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

AmーFーCーG.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )

/*******************************
*3456進行
*EmーFーGーAm
********************************/
const EmーFーGーAm = new Part ({
	sound: "rock_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

EmーFーGーAm.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 0
}) )

EmーFーGーAm.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 1
}) )

EmーFーGーAm.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 2
}) )

EmーFーGーAm.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
	active: (beat, measure) => beat===0 && measure === 3
}) )

EmーFーGーAm.add( new Filter ({
	key:  Em,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 4
}) )

EmーFーGーAm.add( new Filter ({
	key:  F,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 5
}) )

EmーFーGーAm.add( new Filter ({
	key:  G,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 6
}) )

EmーFーGーAm.add( new Filter ({
	key:  Am,
	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => beat===0 && measure === 7
}) )



var selected_Chord = document.getElementById('selected_Chord').innerText; 

alert(selected_Chord);

if (selected_Chord == "FーGーEmーAm") {
ongaq.add(FーGーEmーAm);
} else if (selected_Chord == "FM7ーE7ーAm7ーC7") {
ongaq.add(FM7ーE7ーAm7ーC7);
} else if (selected_Chord == "FーCーGーAm") {
ongaq.add(FーCーGーAm);
} else if (selected_Chord == "CーGーAmーEmーFーCーFーG") {
ongaq.add(CーGーAmーEmーFーCーFーG);
} else if (selected_Chord == "AmーFーGーC") {
ongaq.add(AmーFーGーC);
} else if (selected_Chord == "CーGーAmーF") {
ongaq.add(CーGーAmーF);
} else if (selected_Chord == "CーAm7ーDm7ーG7") {
ongaq.add(CーAm7ーDm7ーG7);
} else if (selected_Chord == "AmーFーCーG") {
ongaq.add(AmーFーCーG);
} 
else {
ongaq.add(EmーFーGーAm);
}







var major_scale = ["C2", "D2", "E2", "F2", "G2", "A2", "B2"];

// 1) natural_minor_scale
// C D D#(E♭) F G G#(A♭) A#(B♭)
var natural_minor_scale = ["C2", "D2", "D2#", "F2", "G2", "G2#", "A2#"];

// 2) Harmonic minor scale
// C D D#(E♭) F G G#(A♭) B
var harmonic_minor_scale = ["C2", "D2", "D2#", "F2", "G2", "G2#", "B2"];

// 3) Melodic minor scale
// C D D#(E♭) F G A B
var melodic_minor_scale = ["C2", "D2", "D2#", "F2", "G2", "A2", "B2"];


// // 2) Dorian scale
// // C D D#(E♭) F G A A#(B♭)
// var natural_minor_scale = ["C", "D", "D#(E♭)", "F", "G", "A", "A#(B♭)"];


// // 3) Phrygian scale
// // C C#(D♭) D#(E♭) F G G#(A♭) A#(B♭)
// var natural_minor_scale = ["C", "C#(D♭)", "D#(E♭)", "F", "G", "G#(A♭)", "A#(B♭)"];


// // 4) Lydian scale
// // C D E F#(G♭) G A B
// var natural_minor_scale = ["C", "D", "E", "F#(G♭)", "G", "A", "B"];


// // 5) Mixolydian scale
// // C D E F G A A#(B♭)
// var natural_minor_scale = ["C", "D", "E", "F", "G", "A", "A#(B♭)"];


// // 6) Aeolian scale
// // C D D#(E♭) F G G#(A♭) A#(B♭)
// var natural_minor_scale = ["C", "D", "D#(E♭)", "F", "G", "G#(A♭)", "A#(B♭)"];


// // 7) Locrian scale
// // C C#(D♭) D#(E♭) F F#(G♭) G#(A♭) A#(B♭)
// var natural_minor_scale = ["C", "C#(D♭)", "D#(E♭)", "F", "F#(G♭)", "G#(A♭)", "A#(B♭)"];


// // 1) Lydian ♭7th scale
// // C D E F#(G♭) G A A#(B♭)
// var natural_minor_scale = ["C", "D", "E", "F#(G♭)", "G", "A", "A#(B♭)"];


// // 2) Altered scale
// // C C#(D♭) D#(E♭) E F#(G♭) G#(A♭) A#(B♭)
// var natural_minor_scale = ["C", "C#(D♭)", "D#(E♭)", "E", "F#(G♭)", "G#(A♭)", "A#(B♭)"];


// // 1) Major pentatonic scale
// // C D E G A
// var natural_minor_scale = ["C", "D", "E", "G", "A"];


// // minor pentatonic scale
// // C D#(E♭) F G A#(B♭)
// var natural_minor_scale = ["C", "D#(E♭)", "F", "G", "A#(B♭)"];


// // 2) blues scale
// // C D D#(E♭) E F F#(G♭) G A A#(B♭)
// var natural_minor_scale = ["C", "D", "D#(E♭)", "E", "F", "F#(G♭)", "G", "A", "A#(B♭)"];


// // 3) Minor blues scale
// // C D#(E♭) F F#(G♭) G A#(B♭)
// var natural_minor_scale = ["C", "D#(E♭)", "F", "F#(G♭)", "G", "A#(B♭)"];


// // 6) spanish 8note
// // C C#(D♭) D#(E♭) E F G G#(A♭) A#(B♭)
// var natural_minor_scale = ["C", "C#(D♭)", "D#(E♭)", "E", "F", "G", "G#(A♭)", "A#(B♭)"];


// // 7) Diminished scale
// // C D D#(E♭) F F#(G♭) G#(A♭) A B
// var natural_minor_scale = ["C", "D", "D#(E♭)", "F", "F#(G♭)", "G#(A♭)", "A", "B"];


// // 8)arabic scale
// // C C#(D♭) E F G G#(A♭) B
// var natural_minor_scale = ["C", "C#(D♭)", "E", "F", "G", "G#(A♭)", "B"];


// // 9)hungarian major
// // C D#(E♭) E F#(G♭) G A A#(B♭)
// var natural_minor_scale = ["C", "D#(E♭)", "E", "F#(G♭)", "G", "A", "A#(B♭)"];


// // 10)hungarian minor
// // C D D#(E♭) F#(G♭) G G#(A♭) B
// var natural_minor_scale = ["C", "D", "D#(E♭)", "F#(G♭)", "G", "G#(A♭)", "B"];


// // 11)Hindu scale
// // C D E F G G#(A♭) A#(B♭)
// var natural_minor_scale = ["C", "D", "E", "F", "G", "G#(A♭)", "A#(B♭)"];


// // 12)yona nuki major
// // C D E G A
// var natural_minor_scale = ["C", "D", "E", "G", "A"];


// // 13)yona nuki minor
// // C D D#(E♭) G G#(A♭)
// var natural_minor_scale = ["C", "D", "D#(E♭)", "G", "G#(A♭)"];


// // 14)Ryukyu Scale
// // C E F G B
// var natural_minor_scale = ["C", "E", "F", "G", "B"];






// var random = Math.floor( Math.random() * 5 );

function random(array, num) {
  var a = array;
  var t = [];
  var r = [];
  var l = a.length;
  var n = num < l ? num : l;
  while (n-- > 0) {
    var i = Math.random() * l | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}

// var measure_array = [0, 1, 2, 3, 0, 1, 2, 3];
// var random_measure=random(measure_array, 7);

// var beat_array = [0,4,8,0,4,8,0,4];
// var random_beat=random(beat_array, 7);

var scale_array = [0,1,2,3,4,5,6,7];
var random_scale=random(scale_array, 7);
// alert(random_scale); 



const guitar = new Part ({
	sound: "rock_guitar",
	measure: 8, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

guitar.add( new Filter ({
	key: "A2",
	length: 4,
	active: (beat, measure) => beat === 0 && measure === 0 //0小節の0拍目
}) )

guitar.add( new Filter ({
	key: "C3",
	length: 4,
	active: (beat, measure) => beat === 4 && measure === 0
}) )

guitar.add( new Filter ({
	key: "F2",
	length: 4,
	active: (beat, measure) => beat === 8 && measure === 0
}) )

guitar.add( new Filter ({
	key: "C3",
	length: 4,
	active: (beat, measure) => beat === 12 && measure === 0
}) )

guitar.add( new Filter ({
	key: "G2",
	length: 4,
	active: (beat, measure) => beat === 0 && measure === 1
}) )

guitar.add( new Filter ({
	key: "D3",
	length: 4,
	active: (beat, measure) => beat === 4 && measure === 1
}) )

guitar.add( new Filter ({
	key: "B3",
	length: 4,
	active: (beat, measure) => beat === 8 && measure === 1
}) )

guitar.add( new Filter ({
	key: "G2",
	length: 4,
	active: (beat, measure) => beat === 12 && measure === 1
}) )

guitar.add( new Filter ({
	key: "E2",
	length: 4,
	active: (beat, measure) => beat === 0 && measure === 2
}) )

guitar.add( new Filter ({
	key: "G2",
	length: 4,
	active: (beat, measure) => beat === 4 && measure === 2 //0小節の0拍目
}) )

guitar.add( new Filter ({
	key: "B2",
	length: 4,
	active: (beat, measure) => beat === 8 && measure === 2
}) )

guitar.add( new Filter ({
	key: "B2",
	length: 4,
	active: (beat, measure) => beat === 12 && measure === 2
}) )

guitar.add( new Filter ({
	key: "A2",
	length: 4,
	active: (beat, measure) => beat === 0 && measure === 3
}) )

guitar.add( new Filter ({
	key: "E2",
	length: 4,
	active: (beat, measure) => beat === 4 && measure === 3
}) )

guitar.add( new Filter ({
	key: "C2",
	length: 4,
	active: (beat, measure) => beat === 8 && measure === 3
}) )

guitar.add( new Filter ({
	key: "C2",
	length: 4,
	active: (beat, measure) => beat === 12 && measure === 3
}) )

guitar.add( new Filter ({
	key: natural_minor_scale[1],
	length: 4,
	active: (beat, measure) => beat === 0 && measure === 4
}) )

guitar.add( new Filter ({
	key: natural_minor_scale[1],
	length: 4,
	active: (beat, measure) => beat === 4 && measure === 4
}) )

guitar.add( new Filter ({
	key: natural_minor_scale[4],
	length: 4,
	active: (beat, measure) => beat === 8 && measure === 4
}) )



// ongaq.add( guitar )




// condition ? exprIfTrue : exprIfFalse

// condition
// 値が条件として使用される式です。

// exprIfTrue
// condition が truthy の値 (true と等しいか、 true に変換できる値) と評価された場合に評価される式です。

// exprIfFalse
// condition が falsy の値 (false と等しいか、 false に変換できる値) と評価された場合に評価される式です。

















