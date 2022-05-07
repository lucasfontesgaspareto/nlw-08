import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { TouchableOpacity, View,  Text, Image, TextInput } from 'react-native';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Screenshot } from '../Screenshot';
import { Button } from '../Button';
import { FeedbackType } from '../Widget';
import { captureScreen } from 'react-native-view-shot'

import { styles } from './styles';
import { CopyRight } from '../CopyRight';
import { api } from '../../libs/api';

interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({
  feedbackType,
  onFeedbackCanceled,
  onFeedbackSent,
}: FormProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [comment, setComment] = useState('')

  async function handleScreenshot() {
    const screenshot = await captureScreen({
      quality: 0.8,
      format: 'png',
      result: 'base64'
    })

    setScreenshot(screenshot)
  }

  function handleScreenshotRemove() {
    setScreenshot('')
  }

  async function handleSendFeedback() {
    if (isSendingFeedback) return false;

    setIsSendingFeedback(true)

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshot}`,
        comment,
      })

      setIsSendingFeedback(false)
      onFeedbackSent()
    } catch (error) {
      console.log(error)
      setIsSendingFeedback(false)
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            style={styles.image}
            source={feedbackTypeInfo.image}
          />
          <Text style={styles.title}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <Screenshot
          screenshot={screenshot}
          onTakeScreenshot={handleScreenshot}
          onRemoveScreenshot={handleScreenshotRemove}
        />
        
        <Button
          isLoading={isSendingFeedback}
          onPress={handleSendFeedback}
        />
      </View>
      
      <CopyRight />
    </View>
  );
}