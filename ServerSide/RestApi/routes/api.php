    <?php

    use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Middleware\CheckToken;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Route;

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json([
        'data' => $request->user()
    ]);
});


    Route::post('/register',[AuthController::class,'Register']);
    Route::post('/login',[AuthController::class,'Login']);

    // Route::get('/user',)

    Route::get('/products',[ProductController::class,'index'])
        ->middleware('auth:sanctum');
