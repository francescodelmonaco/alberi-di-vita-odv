<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PhonesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('phones')->insert([
            [
                'name' => 'Segreteria sociale:',
                'number' => '+39 392 9169439',
            ],
            [
                'name' => 'Segreteria/prenotazioni:',
                'number' => '+39 350 0097205',
            ],
        ]);
    }
}
