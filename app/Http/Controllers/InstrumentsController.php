<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InstrumentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $selected_bpm="";
        $selected_Chord="";
        return view('instruments.index',[
            'selected_bpm'=>$selected_bpm,
            'selected_Chord'=>$selected_Chord,
            ]);
    }
    
    public function generate()
    {
        $selected_bpm="";
        $selected_Chord="";
        return view('instruments.generate',[
            'selected_bpm'=>$selected_bpm,
            'selected_Chord'=>$selected_Chord,
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $selected_bpm=$request->input('selected_bpm');
        $selected_Chord=$request->input('selected_Chord');
        return view('instruments.generate',['selected_bpm'=>$selected_bpm,
            'selected_Chord'=>$selected_Chord,
        ]);



    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
