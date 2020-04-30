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
    
<div class="custom-checkbox">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="piano1">
  <label class="form-check-label" for="exampleRadios1">王道進行</label>
</div>
<div class="custom-checkbox">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="piano2">
  <label class="form-check-label" for="exampleRadios2">just the two of us 進行</label>
</div>
<div class="custom-checkbox">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="piano3">
  <label class="form-check-label" for="exampleRadios3">4156進行</label>
</div>
<div class="custom-checkbox">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="piano4">
  <label class="form-check-label" for="exampleRadios4">カノン進行</label>
</div>
<div class="custom-checkbox">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="piano5">
  <label class="form-check-label" for="exampleRadios5">小室進行</label>
</div>
<div class="custom-checkbox">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="piano6">
  <label class="form-check-label" for="exampleRadios6">レット・イット・ビー進行</label>
</div>
<div class="custom-checkbox">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios7" value="piano7">
  <label class="form-check-label" for="exampleRadios7">1625進行</label>
</div>
<div class="custom-checkbox">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios8" value="piano8">
  <label class="form-check-label" for="exampleRadios8">6415進行</label>
</div>
<div class="custom-checkbox">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios9" value="piano9">
  <label class="form-check-label" for="exampleRadios9">3456進行</label>
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
