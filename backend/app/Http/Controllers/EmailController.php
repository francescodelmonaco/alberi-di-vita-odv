<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Email;

class EmailController extends Controller
{
    public function index()
    {
        // Recupera tutte le email dal database e le restituisce come JSON
        return response()->json(Email::all());
    }
}
