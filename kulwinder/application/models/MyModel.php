<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MyModel extends CI_Model
{

    public function fetch_data()
    {
        $query = $this->db->get("portfolio");
        return $query->result();
    }

    public function fetchSkill_data()
    {
        $query = $this->db->get("skills");
        return $query->result();
    }

    public function store_data($data)
    {
        return $this->db->insert('portfolio', $data);
    }

    public function storeSkill_data($data)
    {
        return $this->db->insert('skills', $data);
    }

    
    public function update_data($data, $id)
    {
        
        $this->db->where('id', $id);
        return $this->db->update('portfolio', $data);
    }

    public function delete_data($id)
    {
        return $this->db->delete('portfolio', ['id' => $id]);
    }

    public function updateSkill_data($data, $name)
    {
        
        $this->db->where('name', $name);
        return $this->db->update('skills', $data);
    }

    public function deleteSkill_data($name)
    {
        return $this->db->delete('skills', ['name' => $name]);
    }
    
}

?>