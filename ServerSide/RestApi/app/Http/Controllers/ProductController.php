<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index() {
        $products = Product::all()->map(function ($product) {
            $product->image = asset(Storage::url($product->image));
            return $product;
        });

        return response()->json([
            'data' => $products
        ],200);
    }

    
}
