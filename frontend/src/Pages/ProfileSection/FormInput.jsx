import { Button, HStack, Input, Select, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleUserDetails,
  get_profile_info,
} from "../../redux/SingleUserDetail/single.actions";

function FormInput({ onClose }) {
  const [form, setForm] = useState({
    bio: "",
    city: "",
    lives_in: "",
    status: "",
    works_at: "",
    worked_at: "",
    number: "",
    school: "",
    intersted_in: "",
    about_you: "",
    favourite_quote: "",
    life_event: "",
    bio: "",
  });

  const dispatch = useDispatch();

  const token = useSelector((state) => state?.auth?.data?.token);
  const login_id = useSelector((state) => state?.auth?._id);

  const [email, id, password] = token.split(":");

  useEffect(() => {
    dispatch(getSingleUserDetails(login_id));
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (form) => {
    let obj = {};
    for (let key in form) {
      if (form[key] != "") {
        obj[key] = form[key];
      }
    }
    onClose();
    axios
      .patch(`${process.env.REACT_APP_URL}/user`, obj, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        // dispatch(get_profile_info(id));
        dispatch(getSingleUserDetails(id));
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <VStack align="start">
      <HStack>
        <label style={{ fontSize: "12px" }} htmlFor="">
          Lives in 🏡
          <Input
            value={form.lives_in}
            size="sm"
            type="text"
            name="lives_in"
            placeholder="lives in"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label style={{ fontSize: "12px" }} htmlFor="">
          Status 💫
          <Input
            name="status"
            onChange={(e) => handleChange(e)}
            value={form.status}
            size="sm"
            type="text"
            placeholder="Single/Mingle ? 😙"
          />
        </label>
      </HStack>
      <HStack>
        <label style={{ fontSize: "12px" }} htmlFor="">
          bio 🧫
          <Input
            name="bio"
            onChange={(e) => handleChange(e)}
            value={form.bio}
            size="sm"
            type="text"
            placeholder="update your bio"
          />
        </label>
      </HStack>
      <HStack>
        <label style={{ fontSize: "12px" }} htmlFor="">
          Wroks at 🧑‍🏭
          <Input
            name="works_at"
            onChange={(e) => handleChange(e)}
            value={form.works_at}
            size="sm"
            type="text"
            placeholder="current work position"
          />
        </label>
        <label style={{ fontSize: "12px" }} htmlFor="">
          worked at ⚒️
          <Input
            name="worked_at"
            onChange={(e) => handleChange(e)}
            value={form.worked_at}
            size="sm"
            type="text"
            placeholder="previous wroked info"
          />
        </label>
      </HStack>
      <HStack>
        <label style={{ fontSize: "12px" }} htmlFor="">
          Number 🔢
          <Input
            name="number"
            onChange={(e) => handleChange(e)}
            value={form.number}
            size="sm"
            type="number"
            placeholder="Contact details"
          />
        </label>
        <label style={{ fontSize: "12px" }} htmlFor="">
          School 🎒
          <Input
            name="school"
            onChange={(e) => handleChange(e)}
            value={form.school}
            size="sm"
            type="text"
            placeholder="School info"
          />
        </label>
      </HStack>
      <VStack align="start" w="full">
        <Text fontSize="12px">Intrested in 💏</Text>
        <Select
          name="intersted_in"
          onClick={(e) => handleChange(e)}
          size="sm"
          w="full"
        >
          <option name="intersted_in" value="Men">
            Men
          </option>
          <option name="intersted_in" value="Women">
            Women
          </option>
        </Select>
      </VStack>
      <VStack align="start" w="full">
        <Text fontSize="12px">About you 🫵</Text>
        <Input
          name="about_you"
          onChange={(e) => handleChange(e)}
          value={form.about_you}
          size="sm"
          type="text"
          placeholder="About You"
        />
      </VStack>
      <VStack align="start" w="full">
        <Text fontSize="12px">Favourite quote 💬❤️</Text>
        <Input
          name="favourite_quote"
          onChange={(e) => handleChange(e)}
          value={form.favourite_quote}
          size="sm"
          type="text"
          placeholder="Favourite quote 💬"
        />
      </VStack>
      <VStack align="start" w="full">
        <Text fontSize="12px">life event 🧬</Text>
        <Input
          name="life_event"
          onChange={(e) => handleChange(e)}
          value={form.life_event}
          size="sm"
          type="text"
          placeholder="life event"
        />
      </VStack>
      <Button
        size="sm"
        colorScheme="blue"
        w="full"
        onClick={() => handleSubmit(form)}
      >
        Submit
      </Button>
    </VStack>
  );
}

export default FormInput;
