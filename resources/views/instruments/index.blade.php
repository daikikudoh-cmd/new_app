@extends('layouts.app')
@section('content')
<link rel="stylesheet" href="{{ asset('css/index.css') }}">






    <main>
        <h1>Ongaq JS Sample</h1>
        <ul>
            <li><a id="button" class="button" href="javascript:;"></a></li>
        </ul>
    </main>






<form action="instruments" method="POST" class="form-horizontal">
  {{ csrf_field() }}
    <div>Select BPM<input type="text" name="selected_bpm"/></div>
    
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="piano1">
  <label class="form-check-label" for="exampleRadios1">王道進行</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="piano2">
  <label class="form-check-label" for="exampleRadios2">just the two of us 進行</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="piano3">
  <label class="form-check-label" for="exampleRadios3">4156進行</label>
</div>

  <button type="submit" name="add">
   追加
  </button>
</form>

<p id="selected_bpm">
    <?php
    print $selected_bpm==NULL ? 120 : $selected_bpm
    ?>
    </p>
    
<p id="selected_Chord">
    <?php
    print $selected_Chord==NULL ? "piano1" : $selected_Chord
    ?>
    </p>











<script src="{{ asset('/js/index.js') }}"></script>

@endsection
