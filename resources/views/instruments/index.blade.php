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
  <input type="text" name="name"/>
  <button type="submit" name="add">
   追加
  </button>
</form>

<p id="js-getVariable">{{$name}}</p>











<script src="{{ asset('/js/index.js') }}"></script>

@endsection
