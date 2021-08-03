@extends('shopify-app::layouts.default')

@section('content')
<div class="container py-4">

    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Price Rule Id</th>
                <th scope="col">Discount Code</th> 
            </tr>
        </thead>
        <tbody>
            
            @foreach($discountshow as $discount)
            <tr>
                <td>{{$discount['id']}}</td>
                <td>{{$discount['price_rule_id']}}</td>
                <td>{{$discount['code']}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    
</div>
@endsection