<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/RestController.php';
require APPPATH . 'libraries/Format.php';
use chriskacerguis\RestServer\RestController;

class MyController extends RestController
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('MyModel');
    }

    public function getFunction_get()
    {
        $fetch = new MyModel;
        $fetch = $fetch->fetch_data();
        $this->response([
            'status' => 200,
                'error' => false,
                'data' => $fetch
        ]);
    }

    public function storeFunction_post()
    {
 
        $model = new MyModel;
        $data = [
            'name' =>  $this->post('name'),
            'description' => $this->post('description'),
            'contact_detail' => $this->post('contact_detail')
           
        ];
        $result = $model->store_data($data);
        if($result > 0)
        {
            $this->response([
                'status' => 200,
                'error' => false,
                'message' => 'new data created'
            ], RestController::HTTP_OK); 
        }
        else
        {
            $this->response([
                'status' => 500,
                'error' => true,
                'message' => 'failed to post data'
            ], RestController::HTTP_BAD_REQUEST);
        }
    }

    

    public function updateFunction_post($id)
    {
        $model = new MyModel;
        $array = [
            'name' =>  $this->post('name'),
            'description' => $this->post('description'),
            'contact_detail' => $this->post('contact_detail')
        ];
        $result = $model->update_data($array, $id);
        if($result > 0)
        {
            $this->response([
                'status' => 200,
                'error' => false,
                'message' => 'record updated',
                'result'=>$result
            ], RestController::HTTP_OK); 
        }
        else
        {
            $this->response([
                'status' => 500,
                'error' => true,
                'message' => 'failed to update data'
            ], RestController::HTTP_BAD_REQUEST);
        }

      
    }

    public function deleteFunction_get($id)
    {
        $model = new MyModel;
        $result = $model->delete_data($id);
        if($result > 0)
        {
            $this->response([
                'status' => 200,
                'error' => false,
                'message' => 'record deleted'
            ], RestController::HTTP_OK); 
        }
        else
        {
            $this->response([
                'status' => 500,
                'error' => true,
                'message' => 'failed to delete data'
            ], RestController::HTTP_BAD_REQUEST);
        }
    }



    //for skills

    public function getSkillFunction_get()
    {
        $fetch = new MyModel;
        $fetch = $fetch->fetchSkill_data();
        $this->response([
            'status' => 200,
                'error' => false,
                'data' => $fetch
        ]);
    }

    public function storeSkillFunction_post()
    {
 
        $model = new MyModel;
        $data = [
            'name' =>  $this->post('name'),
            'experience_level'=>$this->post('experience_level')
           
        ];
        $result = $model->storeSkill_data($data);
        if($result > 0)
        {
            $this->response([
                'status' => 200,
                'error' => false,
                'message' => 'new data created'
            ], RestController::HTTP_OK); 
        }
        else
        {
            $this->response([
                'status' => 500,
                'error' => true,
                'message' => 'failed to post data'
            ], RestController::HTTP_BAD_REQUEST);
        }
    }

    

    public function updateSkillFunction_post($id)
    {
        $model = new MyModel;
        $array = [
            'name' =>  $this->post('name'),
            'experience_level'=>$this->post('experience_level')
        ];
        $result = $model->updateSkill_data($array, $id);
        if($result > 0)
        {
            $this->response([
                'status' => 200,
                'error' => false,
                'message' => 'record updated',
                'result'=>$result
            ], RestController::HTTP_OK); 
        }
        else
        {
            $this->response([
                'status' => 500,
                'error' => true,
                'message' => 'failed to update data'
            ], RestController::HTTP_BAD_REQUEST);
        }

      
    }

    public function deleteSkillFunction_get($name)
    {
        $model = new MyModel;
        $result = $model->deleteSkill_data($name);
        if($result > 0)
        {
            $this->response([
                'status' => 200,
                'error' => false,
                'message' => 'record deleted'
            ], RestController::HTTP_OK); 
        }
        else
        {
            $this->response([
                'status' => 500,
                'error' => true,
                'message' => 'failed to delete data'
            ], RestController::HTTP_BAD_REQUEST);
        }
    }
}

?>