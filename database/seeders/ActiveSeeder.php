<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Active;
use Illuminate\Support\Facades\DB;

class ActiveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()

    {
        DB::table('actives')->insert([
            'script_tag' => 0,
            'status' =>0
        
        ]);
        //
    }
}
