<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    // Cancella tutti i record esistenti
    DB::table('events')->truncate();
    // Inserisci i nuovi dati
    DB::table('events')->insert([
        [
            'year' => '2016',
            'name' => 'Fondazione Alberi di Vita OdV',
            'description' => 'Un gruppo di amici con esperienze di volontariato decide di dedicarsi alla terza e quarta età, nasce Alberi di Vita OdV nel quartiere Mompiano a Brescia.',
            'icon' => 'HousePlus',
        ],
        [
            'year' => '2017',
            'name' => 'Crescita e nuovi volontari',
            'description' => 'La famiglia di Alberi di Vita si allarga: nuovi amici e volontari si uniscono, l’associazione diventa ente capofila del Punto Comunità Mompiano.',
            'icon' => 'Users',
        ],
        [
            'year' => '2018',
            'name' => 'Primo Grest estivo per anziani',
            'description' => 'Viene organizzato il primo Grest estivo per anziani: sei settimane di attività pomeridiane, dal lunedì al venerdì, con grande successo e partecipazione.',
            'icon' => 'Star',
        ],
        [
            'year' => '2019',
            'name' => 'Progetto Buon Vicinato',
            'description' => 'Nasce il progetto “Buon Vicinato”: compagnia agli anziani soli, ausili per la deambulazione, accompagnamento per visite mediche e commissioni quotidiane.',
            'icon' => 'Handshake',
        ],
        [
            'year' => '2020',
            'name' => 'Supporto durante la pandemia',
            'description' => 'L’associazione si attiva per sostenere la comunità durante l’emergenza Covid-19, offrendo servizi di spesa, farmaci e supporto telefonico.',
            'icon' => 'Hospital',
        ],
        [
            'year' => '2021',
            'name' => 'Nuove collaborazioni e progetti',
            'description' => 'Professionisti donano le loro competenze, nascono nuove collaborazioni e progetti per ampliare l’impatto sociale dell’associazione.',
            'icon' => 'Handshake',
        ],
        [
            'year' => '2022',
            'name' => 'Oltre 480 associati',
            'description' => 'L’associazione raggiunge oltre 480 associati di tutte le età, diventando un punto di riferimento per la comunità bresciana.',
            'icon' => 'Users',
        ],
        [
            'year' => '2023',
            'name' => 'Centro Aperto Sandro Marelli',
            'description' => 'Apre il Centro Aperto Sandro Marelli, nuova sede operativa per attività e servizi rivolti agli anziani e alle famiglie.',
            'icon' => 'Star',
        ],
        [
            'year' => '2024',
            'name' => 'Innovazione e nuovi progetti',
            'description' => 'L’associazione continua a innovare, promuovendo nuovi progetti e iniziative per il benessere della comunità.',
            'icon' => 'Heart',
        ]
    ]);
    }
}
