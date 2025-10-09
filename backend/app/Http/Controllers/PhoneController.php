<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Phone;

class PhoneController extends Controller
{
    public function index()
    {
        // Recupera tutti i numeri di telefono dal database e li restituisce come JSON
        return response()->json(Phone::all());
    }
}
