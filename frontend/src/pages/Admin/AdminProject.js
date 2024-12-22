import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

function AdminProject() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;
    const [showAddEditModel, setShowAddEditModel] = useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
    const [type, setType] = useState("add");
    const onFinish = async (values) => {
        try {
          dispatch(ShowLoading());
          let response;
          if (selectedItemForEdit) {
            response = await axios.post(`${apiUrl}/api/portfolio/update-project`, {
              ...values,
              _id: selectedItemForEdit._id,
            });
          } else {
            response = await axios.post(`${apiUrl}/api/portfolio/add-project`, values);
          }
          dispatch(HideLoading());
          if (response.data.success) {
            message.success(response.data.message);
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
            dispatch(HideLoading());
            dispatch(ReloadData(true));
          } else {
            message.error(response.data.message);
          }
        } catch (error) {
          dispatch(HideLoading());
          message.error(error.message);
        }
      };
    
      const onDelete = async (item) => {
        try {
          dispatch(ShowLoading());
          const response = await axios.post(`${apiUrl}/api/portfolio/delete-project`, {
            _id: item._id,
          });
          dispatch(HideLoading());
          if (response.data.success) {
            message.success(response.data.message);
            dispatch(HideLoading());
            dispatch(ReloadData(true));
          } else {
            message.error(response.data.message);
          }
        } catch (error) {
          dispatch(HideLoading());
          message.error(error.message);
        }
      };
    
      return (
        <div>
          <div className="flex justify-end">
            <button
              className="px-5 py-2 bg-primary text-white"
              onClick={() => {
                setSelectedItemForEdit(null);
                setShowAddEditModel(true);
              }}
            >
              Add Project
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1">
            {projects.map((project) => (
              <div className="shadow border p-5 border-gray-400 flex flex-col gap-5">
                <h1 className="text-primary text-xl font-bold">
                  Title : {project.title}
                </h1>
                <hr />
                <h1>Project Link = {project.link}</h1>
                <h1>Description : {project.description}</h1>
                <div className="flex justify-end gap-5 mt-5">
                  <button
                    className="bg-red-500 text-white px-5 py-2"
                    onClick={() => {
                      onDelete(project);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-primary text-white px-5 py-2"
                    onClick={() => {
                      setSelectedItemForEdit(project);
                      setShowAddEditModel(true);
                      setType("edit");
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
    
          {(type === "add" || selectedItemForEdit) && (
            <Modal
              visible={showAddEditModel}
              title={selectedItemForEdit ? "Edit Project" : "Add Project"}
              footer={null}
              onCancel={() => {
                setShowAddEditModel(false);
                setSelectedItemForEdit(null);
              }}
            >
              <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={selectedItemForEdit || {}}
              >
                <Form.Item name="title" label="Title">
                  <input placeholder="Title" />
                </Form.Item>
                <Form.Item name="link" label="Link">
                  <input placeholder="Link" />
                </Form.Item>
                <Form.Item name="description" label="Description">
                  <textarea placeholder="Description" />
                </Form.Item>
                <div className="flex justify-end">
                  <button
                    className="px-5 py-2 border-primary text-primary"
                    onClick={() => {
                      setShowAddEditModel(false);
                      setSelectedItemForEdit(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button className="px-5 py-2 bg-primary text-white">
                    {selectedItemForEdit ? "Update" : "Add"}
                  </button>
                </div>
              </Form>
            </Modal>
          )}
        </div>
      );
}

export default AdminProject