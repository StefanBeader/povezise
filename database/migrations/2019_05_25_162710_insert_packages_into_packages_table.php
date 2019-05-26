<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class InsertPackagesIntoPackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('packages')->insert([
           ['name' => 'promo', 'price' => 0, 'duration' => '2', 'follower_range' => ''],
           ['name' => 'start', 'price' => 50, 'duration' => '30', 'follower_range' => '1000-2000'],
           ['name' => 'pro', 'price' => 120, 'duration' => '90', 'follower_range' => '3000-7000'],
           ['name' => 'Premium', 'price' => 200, 'duration' => '180', 'follower_range' => '6000-10000'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
