<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PhonesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    // Cancella tutti i record esistenti
    DB::table('phones')->truncate();
    // Inserisci i nuovi dati
    DB::table('phones')->insert([
            [
                'name' => 'Segreteria sociale:',
                'number' => '+39 392 9169439',
            ],
            [
                'name' => 'Segreteria/prenotazioni:',
                'number' => '+39 350 0097205',
            ]
        ]);
    }
}
