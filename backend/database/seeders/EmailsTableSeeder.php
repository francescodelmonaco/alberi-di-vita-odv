<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    // Cancella tutti i record esistenti
    DB::table('emails')->truncate();
    // Inserisci i nuovi dati
    DB::table('emails')->insert([
        [
            'name' => "Email info associazione:",
            'email' => "info@alberidivita.it"
        ],
        [
            'name' => "Email contabilità:",
            'email' => "contabilita@alberidivita.it"
        ],
        [
            'name' => "Email presidente:",
            'email' => "presidente@alberidivita.it"
        ],
        [
            'name' => "Email coordinamento:",
            'email' => "coordinamento@alberidivita.it"
        ],
        [
            'name' => "Email educatrice:",
            'email' => "educativa@alberidivita.it"
        ]
    ]);
    }
}
