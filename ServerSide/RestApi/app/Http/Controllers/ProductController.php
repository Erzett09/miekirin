<?php

namespace App\Http\Controllers;

use App\Models\Order;
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

    public function PostOrder(Request $request) {
        $user = $request->user('api');
        $userId = $user->id;
        $items = $request->input('items');

        $order = new Order();
        $order = $order->payment($userId,$items);

        return response()->json([
            'status' => 'success',
            'message' => 'Order berhasil dibuat',
            'data' => $order
        ],201);
    }
}
