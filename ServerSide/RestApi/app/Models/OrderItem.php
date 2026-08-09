<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable = [];


public function order() {
        return $this->belongsToMany(Order::class,'order_id');
    }

    public function product() {
        return $this->belongsToMany(Product::class,'product_id');
    }

}
