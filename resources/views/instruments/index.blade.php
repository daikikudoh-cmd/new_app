@extends('layouts.app')
@section('content')
<link rel="stylesheet" href="css/index.css">







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

<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
</div>


</div>



<div class="container">


<form action="instruments" method="POST" class="form-horizontal">
  {{ csrf_field() }}
  <div class="select_all">

    <div class="bpm">
      <div class="bpm_input">
        <input type="text" name="selected_bpm" class="form-control"/>
        </div>
      <lavel>Select the BPM</lavel>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia, per inceptos himenaeos.</p>
      </div>



    <div class="bpm">
      <div class="chrod_input">
        <select name="selected_Chord" size="1" class="form-control">
        <option value="FーGーEmーAm">王道進行</option>
        <option value="FM7ーE7ーAm7ーC7">just the two of us 進行</option>
        <option value="FーCーGーAm">4156進行</option>
        <option value="CーGーAmーEmーFーCーFーG">カノン進行</option>
        <option value="AmーFーGーC">小室進行</option>
        <option value="CーGーAmーF">レット・イット・ビー進行</option>
        <option value="CーAm7ーDm7ーG7">1625進行</option>
        <option value="AmーFーCーG">6415進行</option>
        <option value="EmーFーGーAm">3456進行</option>
        </select>
        </div>
      <lavel>Select the Chrod</lavel>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia, per inceptos himenaeos.</p>
      </div>



    <div class="bpm">
      <div class="scale_input">
        <select name="example2" size="1" class="form-control">
        <option value="">major_scale</option>
        <option value="選択肢2">natural_minor_scale</option>
        <option value="選択肢3">harmonic_minor_scale</option>
        <option value="選択肢4">melodic_minor_scale</option>
        </select>
        </div>
      <lavel>Select the Chrod</lavel>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia, per inceptos himenaeos.</p>
      </div>
</div>





<!--<div class="custom-checkbox">-->
<!--  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="piano1">-->
<!--  <label class="form-check-label" for="exampleRadios1">王道進行</label>-->
<!--</div>-->
<!--<div class="custom-checkbox">-->
<!--  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="piano2">-->
<!--  <label class="form-check-label" for="exampleRadios2">just the two of us 進行</label>-->
<!--</div>-->
<!--<div class="custom-checkbox">-->
<!--  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="piano3">-->
<!--  <label class="form-check-label" for="exampleRadios3">4156進行</label>-->
<!--</div>-->
<!--<div class="custom-checkbox">-->
<!--  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="piano4">-->
<!--  <label class="form-check-label" for="exampleRadios4">カノン進行</label>-->
<!--</div>-->
<!--<div class="custom-checkbox">-->
<!--  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="piano5">-->
<!--  <label class="form-check-label" for="exampleRadios5">小室進行</label>-->
<!--</div>-->
<!--<div class="custom-checkbox">-->
<!--  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="piano6">-->
<!--  <label class="form-check-label" for="exampleRadios6">レット・イット・ビー進行</label>-->
<!--</div>-->
<!--<div class="custom-checkbox">-->
<!--  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios7" value="piano7">-->
<!--  <label class="form-check-label" for="exampleRadios7">1625進行</label>-->
<!--</div>-->
<!--<div class="custom-checkbox">-->
<!--  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios8" value="piano8">-->
<!--  <label class="form-check-label" for="exampleRadios8">6415進行</label>-->
<!--</div>-->
<!--<div class="custom-checkbox">-->
<!--  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios9" value="piano9">-->
<!--  <label class="form-check-label" for="exampleRadios9">3456進行</label>-->
<!--</div>-->

  <button type="submit" name="add" class="btn btn-secondary">
   GENERATE
  </button>
</form>




</div>












    <!--<main>-->
    <!--    <h1>Ongaq JS Sample</h1>-->
    <!--    <ul>-->
    <!--        <li><a id="button" class="button" href="javascript:;"></a></li>-->
    <!--    </ul>-->
    <!--</main>-->








<p id="selected_bpm">
    <?#phpprint $selected_bpm==NULL ? 120 : $selected_bpm?>
    </p>

<p id="selected_Chord">
    <?#phpprint $selected_Chord==NULL ? "piano1" : $selected_Chord?>
    </p>



<div class="container">
  <h4>投稿一覧</h4>
  <hr>

    <div class="card w-75">
      <div class="card-body">
        <div>
          <p>コード</p>
          <p>Fm - C - Em - A</p>
          </div>
        <div>
          <p>スケール</p>
          <p>minor pentatonic scale</p>
        </div>
        <div>
          <p>BPM</p>
          <p>120</p>
        </div>
      </div>
    </div>

    <div class="card w-75">
      <div class="card-body">
        <div>
          <p>コード</p>
          <p>Fm - C - Em - A</p>
          </div>
        <div>
          <p>スケール</p>
          <p>minor pentatonic scale</p>
        </div>
        <div>
          <p>BPM</p>
          <p>120</p>
        </div>
      </div>
    </div>

    <div class="card w-75">
      <div class="card-body">
        <div>
          <p>コード</p>
          <p>Fm - C - Em - A</p>
          </div>
        <div>
          <p>スケール</p>
          <p>minor pentatonic scale</p>
        </div>
        <div>
          <p>BPM</p>
          <p>120</p>
        </div>
      </div>
    </div>


</div>






<!--<div class="card text-center">-->
<!--  <div class="card-header">-->
<!--    Featured-->
<!--  </div>-->
<!--  <div class="card-body">-->
<!--    <h5 class="card-title">Special title treatment</h5>-->
<!--    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
<!--    <a href="#" class="btn btn-primary">Go somewhere</a>-->
<!--  </div>-->
<!--  <div class="card-footer text-muted">-->
<!--    2 days ago-->
<!--  </div>-->
<!--</div>-->





@endsection
