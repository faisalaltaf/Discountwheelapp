@extends('shopify-app::layouts.default')

@section('content')


    <!-- You are: (shop domain name) -->
    <!-- <p>You are: {{ $shopDomain ?? Auth::user()->name }}</p> -->
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <nav class="navbar navbar-light navbar-expand-md">
  <div><a class="navbar-brand dis_nav_logo" href="index.html">Discountly</a>
  </div>
  <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span>
  <span class="navbar-toggler-icon"></span></button>
  
  <div class="collapse navbar-collapse" id="navcol-1">
  <form action="" method="POST" id="idformdata">

      <div class="ml-auto navbar-text actions">
          <ul class="nav navbar-nav nav-right">
            <tr>
              
              <td>
                </td>
              </tr>
              
              <li class="nav-item"><a class="nav-link" href="index.html">Create Short URL</a>
              
                </li>
                  <li class="nav-item"><a class="nav-link" href="{{route('wheelpop')}}">Pop up & Wheel</a></li>
                  <li class="nav-item"><a class="nav-link" href="subscribe.html">Subscribers</a></li>
                  <li class="nav-item"><a class="nav-link" href="{{route('discountpromocode')}}">Code Coupen</a></li>
                  <li class="nav-item"><a class="nav-link">

                  @foreach($actives as $active)
                  
                      
                     
                        <input data-id="{{$active->id}}" class="toggle-class" type="checkbox" data-onstyle="success" data-offstyle="danger" data-toggle="toggle" data-on="Active" data-off="InActive" {{ $active->status ? 'checked' : '' }}>
                     
                  
 @endforeach


                  </a></li>
                
                </ul>
              </div>
            </div>
          </nav>


<div class="container embed_form mt-4">
    <div class="row">
        <h4 class="h_4"><i class="fa fa-external-link-square-alt"></i>Create Offer</h4>
    </div>
</div>

</form>
<div class="container p-0">
 <div class="row">
  <div class="col-md-12 create">

    <input type="text" name="offername" value="Offer Name" class="create_url_input" required> 

    <div class="offset-2 col-md-8 amount_select_2">
	  <select id="aioConceptName" required>
		  <option value="Fixed Amount">fixed_amount</option>
		  <option value="Percentage">percentage</option>
		  <option value="Free Shipping">shipping_line</option>
		</select>
	  <span class="append">$</span>
	  <input name="price" type="number" min="10" value="16" required>
	 </div>
 
    <div class="col-md-12 create_url mx-auto ">
		 <div class="form_btn_2 m-0 text-center">
		  <button type="button" id="submit1" class="btn btn-default"><i class="fa fa-plus"></i>Add Discount</button>
		 </div>
	 </div>

  </div>
 </div>
</div>

<div class="three_img">
 <div class="container p-0">
  <div class="row">

   <div class="col-md-4">
    <div class="box_1">
    <center>
      <img src="assets/img/2.png">
      <h4>Discount Wheel</h4>
      <p>The embed form can be placed on any page and requires a code snippet that you need to add to your theme files.</p>
      <div class="form-check form_float m-1">
        <label class="switch m-0 mt-2"><input type="checkbox" checked=""><span class="slider round"></span></label>
      </div>
      <div class="form_btn m-1 dis_in">
        <a href="discount-wheel.html"><button type="button" class="btn btn-default m-0 edit_btn"><i class="fa fa-edit"></i>Edit</button></a>
     </div>
     </center>
    </div>
   </div>

   <div class="col-md-4">
    <div class="box_1">
    <center>
      <img src="assets/img/3.png">
      <h4>Discount Popup</h4>
      <p>The popup appears in the center of your page.</p>
      <div>
      <div class="form-check form_float m-1">
        <label class="switch m-0 mt-2"><input type="checkbox" checked=""><span class="slider round"></span></label>
      </div>
      <div class="form_btn m-1 dis_in">
      <a href="discount-popup.html"><button type="button" class="btn btn-default m-0 edit_btn"><i class="fa fa-edit"></i>Edit</button></a>
     </div></div>
     </center>
    </div>
   </div>

   <div class="col-md-4">
    <div class="box_1">
    <center>
      <img src="assets/img/4.png">
      <h4>Embeded Form</h4>
      <p>The embed form can be placed on any page and requires a code snippet that you need to add to your theme files.</p>
      <div class="form-check form_float m-1">
        <label class="switch m-0 mt-2"><input type="checkbox" checked=""><span class="slider round"></span></label>
      </div>
      <div class="form_btn m-1 dis_in">
        <a href="embed-form.html"><button type="button" class="btn btn-default m-0 edit_btn"><i class="fa fa-edit"></i>Edit</button></a>
     </div>
     </center>
    </div>
   </div>

  </div>
 </div>
</div>


@endsection

@section('scripts')
    @parent
    
    <script>
        actions.TitleBar.create(app, { title: 'Welcome' });
    </script>


<script>

  $("#submit1").click(function(event){
    event.preventDefault();
      let select = $('#aioConceptName').find(":selected").text();
      let price = $("input[name=price]").val();
      let offername = $("input[name=offername]").val();
     
      let _token   = $('meta[name="csrf-token"]').attr('content');
// console.log(offername);
// console.log(select);
// console.log(price);

      $.ajax({
        url: "/discount",
        type:"POST",
        data:{
          select:select,
          price:price,
          offername:offername,
          _token: _token
        },
        success:function(response){
          console.log(response);
          if(response) {
            $('.success').text(response.success);
          
          }
        },
       });
  });
</script>

<script>
$(function() {
    $('.toggle-class').change(function() {
        var status = $(this).prop('checked') == true ? 1 : 0; 
        var id = $(this).data('id'); 
         
        $.ajax({
            type: "GET",
            dataType: "json",
            url: '/changeStatus',
            data: {'status': status, 'id': id},
            success: function(data){
              
            }
        });
    })
  })



</script>


@endsection
