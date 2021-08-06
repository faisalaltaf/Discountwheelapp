<?php

namespace App\Http\Controllers;

use api;
use App\Models\Active;
use Illuminate\Http\Request;

class ActiveController extends Controller
{

   
    public function index()
  {
    
    $actives = Active::get();
    // dd($actives);
    return view('welcome',compact('actives'));
    
  }
    
    public function changeUserStatus()
    {
        // return request('id');
      $shop = auth()->user();
      // ($result = $shop->api()->rest('GET' ,'/admin/api/2021-04/script_tags.json'));
      // $result= $shop->api()->rest('DELETE','/admin/api/2021-04/script_tags/176928751765.json');
          $active = Active::find(request('id'));
          $active->status = request('status');
          $active->save();
          $active = Active::where('id', request('id'))->update(['status'=>$active['status']]);
  // snipped add 
  
  $result = $shop->api()->rest('GET','/admin/api/2021-04/themes.json');

    $activeid = "";
  
  foreach($result['body']->container['themes'] as $theme) {
      
      if($theme['role'] === 'main'){
         $activeid =$theme['id'];
      }
  } 
  $value = " <script>  var customer_id= '{{customer.id}}';
  var product_id = '{{product.id}}';
  </script>
  <script type='text/javascript' src='https://wishlistappshop.test/js/frontscript.js'>
  </script>
  <script src='https://wishlistappshop.test/js/wishlistfront.js'></script>
  
  
  <script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></script>";

  $asset_file = array( 'asset' => array('key' => 'layout/theme.liquid'));
  
  if(request('status')==1){

         $assets = $shop->api()->rest('GET', '/admin/api/2021-04/themes/'.$activeid.'/assets.json',$asset_file);
        // dd($assets);
          $assets= $assets['body']->container['asset'];
          // dd($assets['value']);
          
          $snippet=   "{% include 'alertjs' %}" ;

          $body_tag = '</body>';
          $new_body_tag = $snippet . $body_tag;
          $theme_liquid =$assets['value'];
          $new_theme_liquid = str_replace($body_tag,$new_body_tag,$theme_liquid);
        
          if(strpos($assets['value'],$snippet) === false){

            $asset_file = array(
              "asset" => array(
          "key" => "layout/theme.liquid",
          "value" => $new_theme_liquid
              )
              );

            $asset = $shop->api()->rest('PUT', '/admin/api/2021-04/themes/'.$activeid.'/assets.json', $asset_file);
            dd($asset);
          }
  }
        else{
          $asset = $shop->api()->rest('DELETE', '/admin/api/2021-04/themes/'.$activeid.'/assets.json', $asset_file);
  
        
        }
  
   // $script_array= array(
        //   "script_tag"=> array(
        //       "event" =>'onload',
        //       "src" => 'https://Shopifythemes.test/js/frontscript.js',
        //   )   
        //   );
        // if(request('status')==1):
          //   $result = $shop->api()->rest('POST','/admin/api/2021-04/script_tags.json',$script_array); 
        //   $active = Active::where('id', request('id'))->update(['script_id'=>$result['body']['script_tag']['id']]);
        // else:
        //   $actives = Active::get();
        //   foreach($actives as $active):
          //     $ids= $active['script_id'];
          //     $result= $shop->api()->rest('DELETE','/admin/api/2021-04/script_tags/'.$ids.'.json');
          //   endforeach;
          // endif;
        
        }
     
}
