<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Visitor;
use App\Models\Discountwheel;
class EmaildiscountController extends Controller
{
    //
    public function index(Request $req){
       
    $shop = auth()->user();
     $req->validate([
        'email'=>'required',
         'store_name'=>'required',           
     ],[
     
     'email.exists'=>'this is email not exit doctor table',
    
    ]);
        
      
    
        $visitor =new Visitor;
        $visitor->email =$req->email;
        $visitor->store_name =$req->store_name;  
        $save= $visitor->save();

$discount = Discountwheel::find(1);

return $discount['code'];



        

    }
    public function delete(Request $req )
    {
        return 'hello';
    }
}
