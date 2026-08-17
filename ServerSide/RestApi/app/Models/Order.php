<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

    protected $guarded = [];

    public function user() {
        return $this->belongsTo(User::class,'user_id');
    }


    public function orders_detail() {
        return $this->hasMany(OrderDetails::class);
    }

    public function payment(int $idUser,array $items) {
        $order = Order::create(([
            'user_id' => $idUser,
            'code' => 'MKI-' . random_int(1000,9999)
        ]));

        foreach ($items as $item) {

            OrderDetails::create([
                'order_id' => $order->id,
                'name' => $item['product_name'],
                'qty' => $item['product_quantity'],
                'level' => 1,
                'description' => $item['product_description'],
                ]);

                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item['product_id'],
                    'quantity' => $item['product_quantity'],
                    'price' => $item['product_price'],
                    ]);
            } return $order;
    }
}
