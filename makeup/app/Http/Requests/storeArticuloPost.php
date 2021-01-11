<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class storeArticuloPost extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'articulo_id' => 'required|min:1|max:50',
            'nombre_articulo' => 'required|min:5|max:200',
            'descripcion' => 'required|min:5|max:50',
            'categoriaid' => 'required|min:1|max:200',
            'marcaid' => 'required|min:1|max:200',
            'precio' => 'required|min:1|max:50',
            'imagen' => 'required|min:5|max:50'
        ];
    }
}
