<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home()
    {
        $packages = Package::all();
        $promoPackageId = Package::getPromoPackageId();
        return view('pages/home', compact('packages', 'promoPackageId'));
    }
}
