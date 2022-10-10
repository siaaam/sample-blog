import React from 'react';
import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { BlogContext } from '../context/BlogContex';

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

const AddBlog = () => {
  const { addBlog } = useContext(BlogContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    addBlog(data);
  };

  return (
    <Container>
      <h1 className="mt-4 mb-4">Add Blog</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            {...register('title')}
            isInvalid={errors?.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors?.title?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            {...register('description')}
            isInvalid={errors?.description}
          />
          <Form.Control.Feedback type="invalid">
            {errors?.description?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Blog
        </Button>
      </Form>
    </Container>
  );
};

export default AddBlog;
