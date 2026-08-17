<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDetails extends Model
{

    protected $guarded = [];
    public function order() {
        return $this->belongsToMany(Order::class,'order_id');
    }
}
