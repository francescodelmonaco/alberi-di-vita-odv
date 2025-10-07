<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartnersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('partners')->insert([
            [
                'name' => 'Fondazione Casa di Dio',
                'link' => 'http://casadidio.eu/',
                'image' => '/partners/fondazione-casa-di-dio.png',
                'description' => 'Fondazione impegnata nel supporto alla comunità locale',
            ],
            [
                'name' => 'Parrocchia di San Gaudenzio',
                'link' => 'http://www.parrocchiasangaudenzio.org/',
                'image' => '/partners/parrocchia-san-gaudenzio.png',
                'description' => 'Partner ecclesiastico nella zona di Brescia',
            ],
            [
                'name' => 'Fondazione ASM – Gruppo A2A',
                'link' => 'http://www.fondasm.it/',
                'image' => '/partners/fondazione-asm.webp',
                'description' => 'Fondazione per il sostegno di progetti sociali',
            ],
            [
                'name' => 'CSV Brescia',
                'link' => 'https://www.csvlombardia.it/brescia/',
                'image' => '/partners/csv-brescia.gif',
                'description' => 'Centro Servizi per il Volontariato di Brescia',
            ],
            [
                'name' => 'Parrocchia SS. Francesco e Chiara',
                'link' => 'https://www.diocesi.brescia.it/wd-annuario-enti/29-zona-urbana-brescia-nord-2076/santi-francesco-e-chiara-parrocchia-dei-santi-francesco-e-chiara-62/',
                'image' => '/partners/parrocchia-santi-francesco-e-chiara.png',
                'description' => 'Parrocchia di riferimento per la sede operativa',
            ],
            [
                'name' => 'Fondo Bruno Marisa Marniga',
                'link' => 'http://www.fondazionebresciana.org/',
                'image' => '/partners/fondazione-della-comunità-bresciana.png',
                'description' => 'Fondo dedicato al supporto di iniziative sociali',
            ],
            [
                'name' => 'Fondo per il sostegno all’infanzia Vincenzo e Itala Visenzi',
                'link' => 'http://www.fondazionebresciana.org/',
                'image' => '/partners/fondazione-della-comunità-bresciana.png',
                'description' => 'Fondo dedicato al supporto di iniziative sociali',
            ],
            [
                'name' => 'Club Don Abele Rodella Stocchetta',
                'link' => 'http://www.fondazionebresciana.org/',
                'image' => '/partners/fondazione-della-comunità-bresciana.png',
                'description' => 'Fondo dedicato al supporto di iniziative sociali',
            ],
            [
                'name' => 'Gruppo Bossoni',
                'link' => 'https://www.gruppobossoni.it/',
                'image' => '/partners/gruppo-bossoni.png',
                'description' => 'Partner aziendale per progetti di sostegno',
            ],
            [
                'name' => 'Rotary Club Valtrompia',
                'link' => 'https://www.rotaryclub.it/',
                'image' => '/partners/rotary-club-valtrompia.png',
                'description' => 'Club service per il territorio',
            ],
            [
                'name' => 'Pro Loco Mompiano',
                'link' => 'https://prolocomompiano.weebly.com/',
                'image' => '/partners/pro-loco-mompiano.png',
                'description' => 'Associazione per la promozione del territorio',
            ],
            [
                'name' => 'Lasercom',
                'link' => 'https://lasercom.it/',
                'image' => '/partners/lasercom.png',
                'description' => 'Partner tecnologico e di comunicazione',
            ],
        ]);
    }
}
