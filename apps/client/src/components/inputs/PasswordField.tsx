import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react';
import { forwardRef, useRef } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

type Props = {
  onChange: () => void;
  value: string | number;
};

export const PasswordField = ({ onChange, value }): Props => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor="password" fontWeight="bold" fontSize="sm">
        Password
      </FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="text"
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          value={value}
          ref={inputRef}
          name="password"
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          required
          onChange={onChange}
        />
      </InputGroup>
    </FormControl>
  );
};
