<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partner;

class PartnerController extends Controller
{
    public function index()
    {
        // Recupera tutti i partner dal database e li restituisce come JSON
        return response()->json(Partner::all());
    }
}
