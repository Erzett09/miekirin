<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDetails extends Model
{
    public function order() {
        return $this->belongsToMany(Order::class,'order_id');
    }
}
