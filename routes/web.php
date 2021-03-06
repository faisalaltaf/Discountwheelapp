<?php

use Illuminate\Support\Facades\Route;
use GuzzleHttp\Middleware;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\ActiveController;
use App\Http\Controllers\PopupController;
use App\Http\Controllers\EmaildiscountController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('welcome');
})->middleware(['verify.shopify'])->name('home');


Route::get('/login', function () {
    if(Auth::user()) {
        return redirect()->route('home');
    }
    return view('login');
})->name('login');

Route::post('/discount','DiscountController@discount')->middleware(['verify.shopify'])->name('discount');
Route::get('/discountpromocode','DiscountController@showpromocode')->middleware(['verify.shopify'])->name('discountpromocode');
Route::view('/wheelpop','discountcode.wheeldiscount')->middleware(['verify.shopify'])->name('wheelpop');
Route::get('/status','ActiveController@index')->middleware('verify.shopify')->name('status');
Route::get('/emailsend','EmaildiscountController@index')->middleware('verify.shopify')->name('emailsend');
Route::get('/emaildelete','EmaildiscountController@delete')->middleware('verify.shopify')->name('emaildelete');

Route::get('/changeStatus','ActiveController@changeUserStatus')->middleware('verify.shopify');
