require 'rails_helper'

RSpec.describe 'UserPage::Stores', type: :request do
  let!(:user) { create(:user) }

  shared_examples 'アクセス制限' do
    it 'ログインしていない場合は /users/sign_in にリダイレクトされる' do
      is_expected.to eq 302
      expect(response).to redirect_to user_session_path
    end
  end

  shared_examples 'アクセス許可' do
    it 'ログインしている場合は リクエストは200:OK になる' do
      sign_in user
      is_expected.to eq 200
    end
  end

  describe 'GET #index' do
    subject { get user_page_stores_path }
    it_behaves_like 'アクセス許可'
    it_behaves_like 'アクセス制限'
  end

  describe 'GET #new' do
    subject { get new_user_page_store_path }
    it_behaves_like 'アクセス許可'
    it_behaves_like 'アクセス制限'
  end

  describe 'POST #create' do
    let(:store_params) do
      FactoryBot.attributes_for(:store)
    end

    subject { post user_page_stores_path, params: { store: store_params } }

    # ログインしていない場合
    it_behaves_like 'アクセス制限'

    context 'ログインしている場合' do
      before { sign_in user }

      context 'パラメータが妥当な場合' do
        it 'リクエストが成功すること' do
          is_expected.to eq 302
        end

        it 'Storeが登録されること' do
          expect { subject }.to change { Store.count }.by 1
        end

        it 'リダイレクトすること' do
          is_expected.to redirect_to user_page_store_path(Store.last)
        end
      end

      context 'パラメータが不正な場合' do
        let(:store_params) { { name: nil } }

        it 'リクエストが成功すること' do
          is_expected.to eq 200
        end

        it 'Storeが登録されないこと' do
          expect { subject }.to_not change(Store, :count)
        end

        it ':new がrenderされること' do
          is_expected.to render_template :new
        end

        it 'エラーが表示されること' do
          subject
          expect(assigns(:store).errors.any?).to be_truthy
        end
      end
    end
  end
end
