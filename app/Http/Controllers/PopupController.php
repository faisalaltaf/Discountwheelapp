<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Visitor;
class PopupController extends Controller
{
    //
     public function index(Request $request){
    dd($request);
    // $user = $request->user;
dd($user);
    $visitor = new Visitor;
    
    $visitor->user = $visitor;
    
    $visitor->save();
    

        dd($visitor);
        return "hello";

     }
}
