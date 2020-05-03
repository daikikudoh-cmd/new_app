@extends('layouts.app')
@section('content')
<link rel="stylesheet" href="{{ asset('css/generate.css') }}">

<div class="container">

<nav class="navbar navbar-light ">
  <a class="navbar-brand" href="#">Navbar</a>
  
  <ul class="nav justify-content-end">
  
  
  
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>

</nav>


</div>


  <div class="select_all">
    <div class="bpm">
      <div class="bpm_input">
        </div>
      <lavel>BPM 
        <p id="selected_bpm">
          <?php print $selected_bpm==NULL ? 120 : $selected_bpm?> 
          </p>
          </lavel>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia, per inceptos himenaeos.</p>
      </div>
      
      
      
    <div class="bpm">
      <div class="chrod_input">
        </div>
      <lavel>Chrod
        <p id="selected_Chord">
        <?php print $selected_Chord==NULL ? "FーGーEmーAm" : $selected_Chord?>
        </p>
        </lavel>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia, per inceptos himenaeos.</p>
      </div>
      
      
      
    <div class="bpm">
      <div class="scale_input">
        </div>
      <lavel>Select the Chrod</lavel>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia, per inceptos himenaeos.</p>
      </div>
</div>






    <main>
        <h1>CHeck the Music !</h1>
        <ul>
            <li><a id="button" class="button" href="javascript:;"></a></li>
        </ul>
    </main>
    










<script src="{{ asset('/js/index.js') }}"></script>

@endsection
