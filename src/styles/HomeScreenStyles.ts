import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import styled from 'styled-components/native';

export const ViewBackground = styled(View)`
  flex: 1;
  background-color: #121214;
  align-items: center;
`;

export const ViewContainer = styled(KeyboardAvoidingView)`
  width: 300px;
  margin-top: 80px;
`;

export const TitleText: any = styled.Text`
  color: #f1f1f1;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 6px;
`;

export const LoginInput = styled(TextInput)`
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 14px;
  margin-top: 15px;
  background-color: #2b292f;
  font-size: 15px;
  padding-left: 15px;
`;

export const AddTaskButton = styled(TouchableOpacity)`
  border-color: #f1f1f1;
  background-color: #eaa418;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  font-weight: bold;
`;

export const TitleTasks = styled(TitleText)`
  margin-top: 35px;
  margin-bottom: 25px;
`;

export const TaskContentText = styled(Text)`
  color: #f1f1f1;
  font-size: 14px;
  margin-left: 5px;
`;

export const TaskContentTouchView = styled(TouchableOpacity)`
  background-color: #555;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ScrollListTasks = styled.FlatList`
  height: 408px;
`;

export const DeleteTaskButton = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  margin-top: 5px;
`;
