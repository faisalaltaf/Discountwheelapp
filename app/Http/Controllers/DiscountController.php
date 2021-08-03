<?php

namespace App\Http\Controllers;

use api;
use Illuminate\Http\Request;
use App\Models\Discountwheel;

class DiscountController extends Controller
{
    //

    function showpromocode(){
$discountshow = Discountwheel::get();

return view('discountcode.discountshowdata',compact('discountshow'));
 
}


    function discount(Request $req){
// dd($req);
  $shop = auth()->user();
// dd($shop);
$valueprice = $req->price;
$value_type = $req->select;
// dd($value_type);
$title = $req->offername;
$price_rules = array(
    "price_rule" => array(
        "title" => $title,
        "target_type" => "line_item",
        "target_selection" => "all",
        "allocation_method"=> "across",
        "value_type"=> $value_type,
        "value"=> -$valueprice,
        "customer_selection"=> "all",
        "starts_at"=> "2017-01-19T17:59:10Z"
    )
    );
        // return  $req->all();
        $result = $shop->api()->rest('POST','/admin/api/2021-07/price_rules.json',$price_rules);
    //     $price_rule = "";
    //   dd($result['body']);
$price_rule_id =$result['body']->container['price_rule']['id'];
$n = 5;
function getName($n) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
  
    for ($i = 0; $i < $n; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $randomString .= $characters[$index];
    }
  
    return $randomString;
}
  
    $discountcode = getName($n);

    $discount = new Discountwheel;

// return $discount;
$discount_code=array(
    "discount_code"=> array(
      "code" =>$discountcode
    )
    );
$result1 =$shop->api()->rest('POST','/admin/api/2021-07/price_rules/'.$price_rule_id.'/discount_codes.json',$discount_code);
$code=$result1['body']->container['discount_code']['code'];


     $discount->price_rule_id = $price_rule_id;
     $discount->code = $code;
     
     $discount->save();

    }

}
